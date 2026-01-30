// import projects from "@/content/projects.json";

// export type Project = {
//   title: string;
//   summary: string;
//   role: string;
//   problem: string;
//   decision: string;
//   impact: string;
// };

// export function getProjects(): Project[] {
//   return projects as Project[];
// }

import rawProjects from "@/content/projects.json";

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
};

export function getProjects(): Project[] {
  return rawProjects as Project[];
}
