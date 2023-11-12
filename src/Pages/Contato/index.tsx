import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Title from "../../components/title";
import LinkItens from "../../components/link/linkItens";

export function Contact() {
  return (
    <div className="flex font-sans text-neutra flex-col items-center text-center gap-20">
      <Title children="Entre em contato" />

      <span className="text-2xl">
        Vamos criar algo incrível juntos! Fique à vontade para me enviar uma
        mensagem e começarmos essa jornada.
      </span>
      <div className="flex gap-12 mt-10 flex-wrap items-center justify-center">
        <LinkItens
          href="mailto:almeidafonseca14@gmail.com"
          aria-label="Gmail"
          children={<Envelope size={32} />}
          text="Gmail"
          className="flex-col-reverse items-center"
        />
        <LinkItens
          href="https://www.linkedin.com/in/amanda-almeida-bab4541ab/"
          aria-label="Linkedin"
          children={<LinkedinLogo size={32} />}
          text="Linkedin"
          className="flex-col-reverse items-center"
        />

        <LinkItens
          href="https://github.com/MandaAlmeida"
          aria-label="Github"
          children={<GithubLogo size={32} />}
          text="Github"
          className="flex-col-reverse items-center"
        />
        <LinkItens
          href="https://api.whatsapp.com/send?phone=5531999632923"
          aria-label="Whatsapp"
          children={<WhatsappLogo size={32} />}
          text="Whatsapp"
          className="flex-col-reverse items-center"
        />
      </div>
      <div className="mb-10">
        <p className=" font-semibold ">
          <span className="font-light opacity-[55%]">Made by</span> Amanda
          Almeida
        </p>
      </div>
    </div>
  );
}

export default Contact;
