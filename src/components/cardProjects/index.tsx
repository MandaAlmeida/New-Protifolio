import { ArrowSquareIn, GithubLogo } from "@phosphor-icons/react";
import ArrayProjects from "../../ArrayProjects/project";

function CardProject() {
  return (
    <ul className="flex gap-10 lg:gap-32 flex-wrap justify-center">
      {ArrayProjects.map((project) => (
        <li key={project.id} className="flex flex-col gap-5 ">
          <section className="border border-black rounded-xl p-8 max-w-[360px] h-[236px]">
            <img src={project.img} alt="" />
          </section>
          <section className="flex justify-between items-center w-full">
            <span className="text-base font-bold capitalize">
              {project.name}
            </span>
            <section className="flex gap-5 items-center">
              <a target="_black" href={project.linkGit}>
                <GithubLogo size={16} weight="bold" />
              </a>
              <a target="_black" href={project.linkProject}>
                <ArrowSquareIn size={16} weight="bold" />
              </a>
            </section>
          </section>
        </li>
      ))}
    </ul>
  );
}

export default CardProject;
