export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}
export const stats = [
  { number: "3+", label: "Years in Web Development" },
  { number: "20+", label: "Projects Completed" },
  { number: "10+", label: "Technologies Mastered" },
];
export const projects: Project[] = [
  {
    title: "DNBC Financial Group",
    category: "Fintech Portal",
    description:
      "Intelligent digital banking system, convenient payment platform, and global money transfer services.",
    image: "/assets/images/project/dnbcgroupcom.png",
    technologies: ["NextJS", "React", "HTML", "CSS", "TypeScript", "Tailwind"],
    liveUrl: "https://dnbcgroup.com/",
    githubUrl: "#",
  },
  {
    title: "Backoffice DNBC Group",
    category: "Admin Dashboard",
    description:
      "Payment service provider backoffice for individuals and businesses on a global scope.",
    image: "/assets/images/project/backofficednbcnetcom.png",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    liveUrl: "https://backoffice.dnbcnet.com/",
    githubUrl: "#",
  },
  {
    title: "secure-hk.dnbcnet.com",
    category: "Fintech Platform",
    description:
      "Global payment service provider for individuals and businesses.",
    image: "/assets/images/project/securehkdnbcnetcom.png",
    technologies: [
      "NextJS",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Docker",
    ],
    liveUrl: "https://secure-hk.dnbcnet.com/",
    githubUrl: "#",
  },
  {
    title: "BIN Corporation Group",
    category: "Corporate Platform",
    description:
      "Global payment service provider for individuals and businesses.",
    image: "/assets/images/project/bincg.png",
    technologies: [
      "NextJS",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Docker",
    ],
    liveUrl: "https://www.bincorporation.com/",
    githubUrl: "#",
  },
  {
    title: "secure.dnbcnet.com",
    category: "Fintech Platform",
    description:
      "Global payment platform for convenient and secure online transactions.",
    image: "/assets/images/project/securednbcnetcom.png",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    liveUrl: "https://secure.dnbcnet.com/",
    githubUrl: "#",
  },
  {
    title: "papmall",
    category: "E-commerce",
    description:
      "Global e-commerce platform for customers and suppliers to optimize sales revenue.",
    image: "/assets/images/project/papmallcom.png",
    technologies: [
      "WordPress",
      "HTML",
      "SCSS",
      "JavaScript",
      "PHP",
      "Bootstrap",
      "jQuery",
    ],
    liveUrl: "https://papmall.com/",
    githubUrl: "#",
  },
  {
    title: "PayCEC",
    category: "Payment Portal",
    description:
      "Global online payment platform for transactions, transfers, payments, and top-ups.",
    image: "/assets/images/project/payceccom.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "SASS",
      "PHP",
      "jQuery",
      "Bootstrap",
    ],
    liveUrl: "https://www.paycec.com/",
    githubUrl: "#",
  },
];
