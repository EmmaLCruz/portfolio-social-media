import AnimatedComponent from "./AnimatedComponent";
import { useTranslation } from "react-i18next";

import CardPollosHermanos1 from "../assets/images/card-pollos-hermanos1.webp";
import CardPollosHermanos2 from "../assets/images/card-pollos-hermanos2.webp";
import CardPollosHermanos3 from "../assets/images/card-pollos-hermanos3.webp";

import CardJinjer1 from "../assets/images/card-jinjer1.webp";
import CardJinjer2 from "../assets/images/card-jinjer2.webp";
import CardJinjer3 from "../assets/images/card-jinjer3.webp";

import CardLiterarium1 from "../assets/images/card-literarium1.webp";
import CardLiterarium2 from "../assets/images/card-literarium2.webp";
import CardLiterarium3 from "../assets/images/card-literarium3.webp";

import HTMLLogo from "../assets/icons/html-logo.png";
import CssLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import TypeScriptLogo from "../assets/icons/typescript-logo.png";
import JqueryLogo from "../assets/icons/jquery-logo.png";
import ReactLogo from "../assets/icons/react-logo.png";
import TailwindLogo from "../assets/icons/tailwindcss-logo.png";
import SassLogo from "../assets/icons/sass-logo.png";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Los Pollos Hermanos",
      description: t("sections.projects.pollos"),
      img1: CardPollosHermanos1,
      img2: CardPollosHermanos2,
      img3: CardPollosHermanos3,
      flyer: "responsive",
      technologies: [
        { name: "HTML", img: HTMLLogo },
        { name: "CSS", img: CssLogo },
        { name: "Javascript", img: JavascriptLogo },
        { name: "Jquery", img: JqueryLogo },
      ],
      link: "https://emmanuel-cruz-dev.github.io/los-pollos-hermanos-website/",
      github: "https://github.com/emmanuel-cruz-dev/los-pollos-hermanos-website",
    },
    {
      id: 2,
      title: "Literarium | Bookstore",
      description: t("sections.projects.literarium"),
      img1: CardLiterarium1,
      img2: CardLiterarium2,
      img3: CardLiterarium3,
      flyer: "responsive",
      technologies: [
        { name: "React", img: ReactLogo },
        { name: "TypeScript", img: TypeScriptLogo },
        { name: "Tailwind CSS", img: TailwindLogo },
      ],
      link: "https://literarium.netlify.app/",
      github: "https://github.com/EmmaLCruz/literarium",
    },
    {
      id: 3,
      title: "Jinjer | Website",
    description: t("sections.projects.jinjer"),
    img1: CardJinjer1,
    img2: CardJinjer2,
    img3: CardJinjer3,
    flyer: "language",
    technologies: [
      { name: "React", img: ReactLogo },
      { name: "Tailwind CSS", img: TailwindLogo },
      { name: "Sass", img: SassLogo },
    ],
    link: "https://jinjer.vercel.app/",
    github: "https://github.com/EmmaLCruz/jinjer",
    }
  ];

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="projects"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.projects.title")}
          </h2>
          <h3 className="text-lg">{t("sections.projects.description")}</h3>
        </div>
      </AnimatedComponent>
      <article>
        <div className="card-container flex flex-wrap gap-12 mx-auto">

          {projects.map((project) => 
          <ProjectsCard key={project.id} {...project} />
          )}
        </div>
      </article>
    </section>
  );
};

export default Projects;
