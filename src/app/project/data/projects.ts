export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  period: string;
  language: string;
  library: string;
  pdfUrl: string;
  gitUrl: string;
}

export const projects: Project[] = [
  {
    link: "Project-1",
    title: "Portfolio",
    description: "개인 포트폴리오",
    image: "/image/project1.png",
    period: "2024-10-21 - 2004-10-26",
    language: "CSS / Javascript",
    library: "Next.js",
    pdfUrl: "/image/portfolio.pdf",
    gitUrl: "https://github.com/woo0629/portfolio",
  },
  {
    link: "Project-2",
    title: "개인 프로젝트 ",
    description: "기온별 옷 추천 콘텐츠 [작업중]",
    image: "/image/project2.png",
    language: "CSS / Javascript / Python / Node.js",
    period: "2024-10-14 - 2024-10-16",
    library: "React",
    pdfUrl: "Next.js",
    gitUrl: "Next.js",
  },
  {
    link: "Project-3",
    title: "팀 프로젝트 digging",
    description: "C2C 거래 및 커뮤니티 사이트",
    image: "/image/project3.png",
    language: "CSS / Javascript / Node.js / Python",
    period: "2023.11.14 - 2023.12.21",
    library: "React",
    pdfUrl: "/image/digging.pdf",
    gitUrl: "https://github.com/woo0629/Digging-fr",
  },
];
