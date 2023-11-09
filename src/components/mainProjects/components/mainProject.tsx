import React from "react";
import TypeLanguage from "./typeLanguage";
import { ArrowSquareIn, GithubLogo } from "@phosphor-icons/react";
import LinkItens from "./linkItens";

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

interface ProductListProps {
  projects: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ projects }) => {
  return (
    <ul className="flex flex-col gap-32 items-center">
      {projects.map((project) => (
        <li key={project.id} className="flex justify-between items-center">
          <section className="flex flex-col gap-10 items-start w-[50%]">
            <h3 className="text-2xl font-bold uppercase">{project.name}</h3>
            <p className="text-sm font-bold">{project.description}</p>
            <section className="flex items-center gap-4">
              <TypeLanguage text={project.language1} />
              <TypeLanguage text={project.language2} />
            </section>
            <section className="flex items-center gap-7">
              <LinkItens
                href={project.linkGit}
                text="Ver no GitHub"
                children={<GithubLogo size={16} weight="bold" />}
              />
              <LinkItens
                href={project.linkProject}
                text=" Acessar site"
                children={<ArrowSquareIn size={16} weight="bold" />}
              />
            </section>
          </section>
          <img src={project.img} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
