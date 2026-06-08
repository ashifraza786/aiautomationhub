import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { saveContactSubmission, getContactSubmissions, getContactStats } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  contact: router({
    // ── Public: Submit contact form ──────────────────────────────────────────
    submitForm: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, "Full name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().min(1, "Phone number is required"),
          company: z.string().optional(),
          requirements: z.string().min(1, "Project requirements are required"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await saveContactSubmission({
            fullName: input.fullName,
            email: input.email,
            phone: input.phone,
            company: input.company || null,
            requirements: input.requirements,
          });

          await notifyOwner({
            title: "New Contact Form Submission",
            content: `New inquiry from ${input.fullName}\n\nEmail: ${input.email}\nPhone: ${input.phone}\nCompany: ${input.company || "Not provided"}\n\nRequirements:\n${input.requirements}`,
          });

          return { success: true, message: "Form submitted successfully" };
        } catch (error) {
          console.error("Contact form submission error:", error);
          throw new Error("Failed to submit contact form");
        }
      }),

    // ── Admin: Get all leads with pagination ─────────────────────────────────
    getLeads: publicProcedure
      .input(
        z.object({
          page: z.number().min(1).default(1),
          limit: z.number().min(1).max(100).default(20),
          status: z.enum(["all", "new", "contacted", "closed"]).default("all"),
        }).optional()
      )
      .query(async ({ input }) => {
        try {
          const page = input?.page ?? 1;
          const limit = input?.limit ?? 20;
          const submissions = await getContactSubmissions({ page, limit });
          return submissions;
        } catch (error) {
          console.error("Get leads error:", error);
          throw new Error("Failed to fetch leads");
        }
      }),

    // ── Admin: Dashboard stats ────────────────────────────────────────────────
    getStats: publicProcedure.query(async () => {
      try {
        return await getContactStats();
      } catch (error) {
        console.error("Get stats error:", error);
        return { total: 0, today: 0, thisWeek: 0, thisMonth: 0 };
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
