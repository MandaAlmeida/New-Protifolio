import { GithubLogo, LinkedinLogo, List } from "@phosphor-icons/react";
import LinkHeader from "./components/link";
import ItemHeader from "./components/itens";

interface headerProps {
  Click: React.MouseEventHandler;
  activeMenu: boolean;
}

function Header(props: headerProps) {
  const { Click, activeMenu } = props;

  return (
    <header className="flex justify-between items-center w-full">
      <button
        onClick={Click}
        type="button"
        aria-label="menu"
        className="block lg:hidden"
      >
        <List
          size={25}
          className="text-gray1 hover:text-primary"
          weight="bold"
        />
      </button>
      <section
        className={
          activeMenu
            ? "w-[71%] h-[100vh] max-w-xs fixed lg:relative flex flex-col top-0 py-20 left-0 bg-[white] z-50 gap-8 px-4"
            : "hidden lg:flex justify-between w-full"
        }
      >
        <a href="#" className="list-none">
          <LinkHeader link="Amanda Almeida" className="lg:text-base text-xl" />
        </a>
        <ul className="flex max-lg:flex-col gap-8 lg:items-center ">
          <LinkHeader
            className="lg:text-xs text-sm hover:text-primary"
            link="projetos"
          />
          <LinkHeader
            className="lg:text-xs text-sm hover:text-primary"
            link="sobre"
          />
          <LinkHeader
            className="lg:text-xs text-sm hover:text-primary"
            link="contato"
          />
          <ItemHeader
            link="https://github.com/MandaAlmeida"
            children={
              <GithubLogo size={20} className="text-gray1 hover:text-primary" />
            }
            text="GitHub"
          />

          <ItemHeader
            link="https://www.linkedin.com/in/amanda-almeida-bab4541ab/"
            children={
              <LinkedinLogo
                size={20}
                className="text-gray1 hover:text-primary"
              />
            }
            text="Linkedin"
          />
        </ul>
      </section>
    </header>
  );
}

export default Header;
