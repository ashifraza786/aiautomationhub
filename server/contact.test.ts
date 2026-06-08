import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database and notification functions
vi.mock("./db", () => ({
  saveContactSubmission: vi.fn().mockResolvedValue({ insertId: 1 }),
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("contact.submitForm", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    const ctx = createPublicContext();
    caller = appRouter.createCaller(ctx);
  });

  it("should successfully submit a contact form with all required fields", async () => {
    const result = await caller.contact.submitForm({
      fullName: "John Doe",
      email: "john@example.com",
      phone: "+91 7484821896",
      company: "Tech Company",
      requirements: "I need AI automation for my business",
    });

    expect(result).toEqual({
      success: true,
      message: "Form submitted successfully",
    });
  });

  it("should successfully submit a contact form without optional company field", async () => {
    const result = await caller.contact.submitForm({
      fullName: "Jane Smith",
      email: "jane@example.com",
      phone: "+91 9876543210",
      requirements: "Looking for website development",
    });

    expect(result).toEqual({
      success: true,
      message: "Form submitted successfully",
    });
  });

  it("should reject submission with invalid email", async () => {
    await expect(
      caller.contact.submitForm({
        fullName: "John Doe",
        email: "invalid-email",
        phone: "+91 7484821896",
        requirements: "Test",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with empty full name", async () => {
    await expect(
      caller.contact.submitForm({
        fullName: "",
        email: "john@example.com",
        phone: "+91 7484821896",
        requirements: "Test",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with empty phone number", async () => {
    await expect(
      caller.contact.submitForm({
        fullName: "John Doe",
        email: "john@example.com",
        phone: "",
        requirements: "Test",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with empty requirements", async () => {
    await expect(
      caller.contact.submitForm({
        fullName: "John Doe",
        email: "john@example.com",
        phone: "+91 7484821896",
        requirements: "",
      })
    ).rejects.toThrow();
  });

  it("should accept submissions from public users (no authentication required)", async () => {
    const ctx = createPublicContext();
    const publicCaller = appRouter.createCaller(ctx);

    const result = await publicCaller.contact.submitForm({
      fullName: "Public User",
      email: "public@example.com",
      phone: "+91 1234567890",
      requirements: "General inquiry",
    });

    expect(result.success).toBe(true);
  });
});
