
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
      "A final-year academic project exploring an approach to early detection of potential medication non-adherence.",
    problem:
      "Medication non-adherence can be difficult to identify early, creating a need to explore potential patterns.",
    system:
      "An academic project focused on problem definition, system design, and exploration of a proposed solution.",
    technology:
      "Implementation technologies and technical details should be confirmed against the actual project.",
    outcome:
      "Academic / Final-Year Project. Clinical effectiveness and measured outcomes have not been verified.",
    featured: true,
    tags: ["Academic Project", "Final-Year Project", "Research"],
    href: "/work/ai-based-early-detection-of-medication-non-adherence",
    image: "/images/ai-automation.png",
  },
  {
    slug: "erp-management-system",
    number: "02",
    title: "ERP Management System",
    shortTitle: "ERP Business Systems",
    category: "Concept",
    status: "Prototype",
    description:
      "An ERP workflow showcase connecting sales, inventory, billing, HR, and reporting concepts.",
    problem:
      "Business functions can become difficult to coordinate when workflows are disconnected.",
    system:
      "A conceptual ERP showcase representing connected workflows across core business functions.",
    technology:
      "React, TypeScript, Framer Motion, and Lucide icons for the visual showcase.",
    outcome:
      "Interactive ERP workflow concept. Production deployment and measured business outcomes have not been verified.",
    featured: true,
    tags: ["ERP", "Business Systems", "Workflow"],
    href: "/work/erp-management-system",
    image: "/images/erp-system.png",
  },
  {
    slug: "business-website-digital-store",
    number: "03",
    title: "Business Website & Digital Store",
    shortTitle: "Business Website",
    category: "Concept",
    status: "Prototype",
    description:
      "A digital experience concept focused on business presentation, website usability, and customer journeys.",
    problem:
      "Businesses need a clear digital presence that helps visitors understand their offerings and navigate relevant information.",
    system:
      "A website and digital-store showcase exploring the structure of a business-focused digital experience.",
    technology:
      "Implementation technologies and production details should be confirmed against the actual project.",
    outcome:
      "Digital experience concept. Verified business results and production deployment have not been provided.",
    featured: true,
    tags: ["Website", "Digital Experience", "Web Development"],
    href: "/work/business-website-digital-store",
    image: "/images/bussiness-system.png",
  },
  {
    slug: "ai-automation-case-study",
    number: "04",
    title: "AI Automation Workflow",
    shortTitle: "AI Automation",
    category: "Concept",
    status: "Prototype",
    description:
      "An illustrative automation concept showing how information capture, AI-assisted tasks, and connected tools can work together.",
    problem:
      "Repeated manual tasks and disconnected tools can make business workflows harder to manage.",
    system:
      "A conceptual workflow illustrating information capture, AI-assisted understanding, rule-based decisions, and subsequent actions.",
    technology:
      "Conceptual showcase. Specific integrations and production implementation details have not been verified.",
    outcome:
      "Illustrative workflow concept. Measured time savings, business impact, and production deployment have not been verified.",
    featured: true,
    tags: ["AI", "Automation", "Integrations", "Workflow"],
    href: "/work/ai-automation-case-study",
    image: "/images/ai-automation.png",
  },
];

/*
 * Keep homepage selection separate from the complete
 * Work page collection.
 */
export const featuredProjects = projectData.filter(
  (project) => project.featured,
);
