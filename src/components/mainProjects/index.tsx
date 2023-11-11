import ProductList from "./components/mainProject";
import { Link } from "react-router-dom";
import useFetchData from "../../useFeatchProject";

function Projects() {
  const { jsonData } = useFetchData("/src/json/project.json");

  return (
    <section className="flex flex-col lg:gap-32 gap-20 items-center">
      <h3 className="text-xl lg:text-2xl font-bold">PRINCIPAIS PROJETOS:</h3>
      {jsonData ? (
        <ProductList projects={jsonData} />
      ) : (
        <p>Carregando projetos...</p>
      )}
      <Link to={"/projetos"}>
        <button className="text-base lg:text-2xl font-bold border border-black dark:border-white p-3 rounded-full hover:text-primary hover:border-primary dark:hover:border-primary">
          Ver Mais Projetos
        </button>
      </Link>
    </section>
  );
}

export default Projects;
