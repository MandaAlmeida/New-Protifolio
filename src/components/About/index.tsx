import { CaretDown } from "@phosphor-icons/react";
import Typewriter from "typewriter-effect";
import Title from "../title";
import Paragrafo from "../paragrafo";

function About() {
  return (
    <section className="flex flex-col gap-10 lg:gap-20 lg:w-[71%] max-w-4xl items-center text-center">
      <Title>
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString("< Hello World />")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <Paragrafo
        text="Olá, eu sou Desenvolvedora Front-end. Desenvolvo interfaces cativantes e
        intuitivas que enriquecem a experiência do usuário e adicionam valor a
        projetos digitais."
      />
      <CaretDown
        size={40}
        color="#167d7f"
        weight="bold"
        className="cursor-pointer"
      />
    </section>
  );
}

export default About;
