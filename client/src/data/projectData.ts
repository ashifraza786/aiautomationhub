export type ProjectCategory =
  | "Client Project"
  | "Academic Project"
  | "Prototype"
  | "Concept"
  | "Internal Build"
  | "Experimental";

export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Prototype"
  | "Experimental"
  | "Academic";

export interface ProjectData {
  slug: string;
  number: string;
  title: string;
  shortTitle?: string;
  category: ProjectCategory;
  status: ProjectStatus;

  description: string;

  problem: string;
  system: string;
  technology: string;
  outcome: string;

  featured: boolean;

  tags: string[];

  href?: string;
  image?: string;
}

export const projectData: ProjectData[] = [
  {
    slug: "ai-based-early-detection-of-medication-non-adherence",
    number: "01",
    title: "AI-Based Early Detection of Medication Non-Adherence",
    shortTitle: "Medication Non-Adherence Detection",
    category: "Academic Project",
    status: "Academic",

    description:
      "A final-year academic project focused on exploring an approach for the early detection of medication non-adherence.",

    problem:
      "Medication non-adherence can be difficult to identify early, creating a need for systems that can help detect potential non-adherence patterns.",

    system:
      "An academic project designed to explore the problem, define the system approach and implement the proposed solution.",

    technology:
      "Project technologies and implementation details will be documented here after the final project information is added.",

    outcome: "Academic / Final-Year Project",

    featured: true,

    tags: ["Academic Project", "Final-Year Project", "Research"],

    href: "/work/ai-based-early-detection-of-medication-non-adherence",
  },
];

/*
 * Homepage selection.
 *
 * Keep this separate so the homepage can show only the
 * strongest selected projects while the full Work page
 * can use the complete projectData collection.
 */
export const featuredProjects = projectData.filter(
  (project) => project.featured,
);
