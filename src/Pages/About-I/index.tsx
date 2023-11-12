import Title from "../../components/title";
import Me from "./assets/Eu.jpeg";

function AboutI() {
  return (
    <section className="flex lg:flex-row flex-col-reverse sm:max-lg:items-center gap-7 items-center">
      <img className="lg:w-[50%] w-[60%]" src={Me} alt="Uma foto minha" />
      <section className="flex flex-col gap-10 max-w-4xl sm:max-lg:text-center sm:max-lg:items-center ">
        <Title>Sobre mim</Title>
        <p className="text-base lg:text-basefont-bold">
          Olá! Meu nome é Amanda de Almeida, e estou empolgada em compartilhar
          um pouco mais sobre mim com você. Tenho 22 anos e sou natural de Sete
          Lagoas.
          <br />
          <br />
          Tenho uma paixão especial pela programação, e nos último ano tenho me
          dedicado a aprimorar minhas habilidades nessa área. Comecei a estudar
          programação há aproximadamente um ano, e desde então tenho me
          aprofundado em diversas tecnologias e linguagens.
          <br />
          <br />
          Atualmente, estou fazendo curso da Rocketseat, tenho conhecimento em
          HTML e CSS, JavaScript, TypeScript, React, Sass, Tailwind CSS, CSS
          módulos, Vtex IO, Git e Node.js, e sou formada em Análise e
          Desenvolvimento de Sistemas. Essa variedade de tecnologias me capacita
          a criar aplicações web interativas e responsivas.
          <br />
          <br />
          O que mais me motiva é a possibilidade de aprender constantemente.
          Acredito que o aprendizado contínuo é crucial para acompanhar as
          evoluções tecnológicas. Encaro os desafios como oportunidades de
          crescimento, sendo persistente e determinada para superá-los.
          <br />
          <br />
          Além do meu conhecimento técnico, sou uma pessoa comunicativa,
          trabalho bem em equipe e tenho facilidade em aprender e adaptar-me a
          novos ambientes. Valorizo a colaboração e a troca de conhecimentos,
          pois acredito que o trabalho em equipe leva a resultados melhores e
          mais eficientes.
          <br />
          <br />
          Estou animada com as possibilidades que surgem no campo da programação
          e em fazer parte de projetos desafiadores. Sinto-me confiante em
          minhas habilidades e entusiasmada para enfrentar novos desafios e
          contribuir de forma significativa para equipes de desenvolvimento. E
          estou ansiosa para trabalhar em conjunto, aprender mais e ajudar a
          construir soluções inovadoras.
          <br />
          <br />
          Agradeço pela atenção dada à minha apresentação e estou disponível
          para mais informações.
        </p>
      </section>
    </section>
  );
}

export default AboutI;
