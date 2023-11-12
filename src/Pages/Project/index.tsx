import CardProject from "../../components/cardProjects";
import Paragrafo from "../../components/paragrafo";
import Title from "../../components/title";

function Project() {
  return (
    <>
      <section className="flex flex-col gap-10 lg:gap-20 lg:w-[71%] max-w-4xl items-center text-center">
        <Title>Todos os meus projetos</Title>
        <Paragrafo
          text="Bem-vindo à minha coleção de projetos!
          Aqui, você encontrará uma variedade de trabalhos, desde desenvolvimento web até experiências criativas. Cada projeto é especial, repleto de dedicação e paixão.
Explore e aproveite! Se algo chamar sua atenção ou se tiver alguma pergunta, estou à disposição. Estou ansioso para compartilhar mais projetos emocionantes no futuro."
        />
      </section>

      <CardProject />
    </>
  );
}

export default Project;
