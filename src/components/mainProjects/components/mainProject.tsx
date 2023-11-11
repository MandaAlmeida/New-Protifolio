import React from "react";
import TypeLanguage from "./typeLanguage";
import { ArrowSquareIn, GithubLogo } from "@phosphor-icons/react";
import LinkItens from "./linkItens";
import ArrayProjects from "../../../ArrayProjects/project";

const ProductList = () => {
  return (
    <ul className="flex flex-col lg:gap-32 gap-20 items-center ">
      {ArrayProjects.map((project) => (
        <li
          key={project.id}
          className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center w-full"
        >
          <section
            className={`flex flex-col lg:order-${
              project.id % 2 === 0 ? "2" : "1"
            } gap-10 lg:items-start lg:w-[50%] items-center sm:max-lg:text-center `}
          >
            <h3 className="text-2xl font-bold uppercase ">{project.name}</h3>
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
          <img
            className={`lg:order-${project.id % 2 === 0 ? "1" : "2"}`}
            src={project.img}
            alt=""
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
