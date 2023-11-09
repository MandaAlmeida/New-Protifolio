import Paragrafo from "../../components/paragrafo";
import Title from "../../components/title";
import Me from "./assets/Eu.jpeg";

function AboutI() {
  return (
    <section className="flex gap-7">
      <img className="w-[50%]" src={Me} alt="Uma foto minha" />
      <section className="flex flex-col gap-10  max-w-4xl">
        <Title>Sobre mim</Title>
        <Paragrafo
          text="Olá, eu sou Desenvolvedora Front-end. Desenvolvo interfaces cativantes e
        intuitivas que enriquecem a experiência do usuário e adicionam valor a
        projetos digitais."
        />
      </section>
    </section>
  );
}

export default AboutI;
