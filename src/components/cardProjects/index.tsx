import { ArrowSquareIn, GithubLogo } from "@phosphor-icons/react";

interface Product {
  id: number;
  name: string;
  description: string;
  language1: string;
  language2: string;
  linkGit: string;
  linkProject: string;
  img: string;
}

interface CardProjectProps {
  projects: Product[];
}

const CardProject: React.FC<CardProjectProps> = ({ projects }) => {
  return (
    <ul className="flex gap-32 justify-between">
      {projects.map((project) => (
        <li key={project.id} className="flex flex-col gap-5">
          <section className="border border-black rounded-xl p-8 max-w-[360px] h-[236px]">
            <img src={project.img} alt="" />
          </section>
          <section className="flex justify-between items-center w-full">
            <span className="text-base font-bold capitalize">
              {project.name}
            </span>
            <section className="flex gap-5 items-center">
              <a href={project.linkGit}>
                <GithubLogo size={16} weight="bold" />
              </a>
              <a href={project.linkProject}>
                <ArrowSquareIn size={16} weight="bold" />
              </a>
            </section>
          </section>
        </li>
      ))}
    </ul>
  );
};

export default CardProject;
