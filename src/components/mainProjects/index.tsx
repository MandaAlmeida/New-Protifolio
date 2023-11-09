import ProductList from "./components/mainProject";
import { Link } from "react-router-dom";
import useFetchData from "../../useFeatchProject";

function Projects() {
  const { jsonData } = useFetchData("/src/json/project.json");

  return (
    <section className="flex flex-col gap-32 items-center">
      <h3 className="text-2xl font-bold">PRINCIPAIS PROJETOS:</h3>
      {jsonData ? (
        <ProductList projects={jsonData} />
      ) : (
        <p>Carregando projetos...</p>
      )}
      <Link to={"/projetos"}>
        <button className="text-2xl font-bold border border-black p-3 rounded-full hover:text-primary hover:border-primary">
          Ver Mais Projetos
        </button>
      </Link>
    </section>
  );
}

export default Projects;
