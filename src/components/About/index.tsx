import { CaretDown } from "@phosphor-icons/react";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <section className="flex flex-col gap-20 w-[71%] max-w-4xl items-center">
      <h1 className="text-5xl text-black uppercase font-bold">
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
      </h1>
      <p className="text-2xl font-bold text-center">
        Olá, eu sou Desenvolvedora Front-end. Desenvolvo interfaces cativantes e
        intuitivas que enriquecem a experiência do usuário e adicionam valor a
        projetos digitais.
      </p>
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
