import CardProject from "../../components/cardProjects";
import Paragrafo from "../../components/paragrafo";
import Title from "../../components/title";
import useFetchData from "../../useFeatchProject";

function Project() {
  const { jsonData } = useFetchData("/src/json/project.json");
  return (
    <>
      <section className="flex flex-col gap-20 w-[71%] max-w-4xl items-center">
        <Title>Todos os meus projetos</Title>
        <Paragrafo
          text="Bem-vindo à minha coleção de projetos!
          Aqui, você encontrará uma variedade de trabalhos, desde desenvolvimento web até experiências criativas. Cada projeto é especial, repleto de dedicação e paixão.
Explore e aproveite! Se algo chamar sua atenção ou se tiver alguma pergunta, estou à disposição. Estou ansioso para compartilhar mais projetos emocionantes no futuro."
        />
      </section>
      {jsonData ? (
        <CardProject projects={jsonData} />
      ) : (
        <p>Carregando projetos...</p>
      )}
    </>
  );
}

export default Project;
