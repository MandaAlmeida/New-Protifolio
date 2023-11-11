import { useLocation } from "react-router-dom";
import { GithubLogo, LinkedinLogo, List } from "@phosphor-icons/react";
import LinkHeader from "./components/link";
import ItemHeader from "./components/itens";

interface headerProps {
  Click: React.MouseEventHandler;
  activeMenu: boolean;
  darkMode: React.MouseEventHandler;
  active: boolean;
}

function Header(props: headerProps) {
  const { Click, activeMenu, darkMode, active } = props;
  const location = useLocation();
  const currentPath = location.pathname;

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
          className="text-gray1 dark:text-white dark:hover:text-primary hover:text-primary"
          weight="bold"
        />
      </button>
      <section
        className={
          activeMenu
            ? "w-[71%] h-[100vh] max-w-xs fixed lg:relative flex flex-col top-0 py-20 left-0 dark:bg-darkMenu bg-[white] z-50 gap-8 px-4"
            : "hidden lg:flex justify-between w-full"
        }
      >
        <a href="#" className="list-none">
          <LinkHeader
            onClick={Click}
            link={"/"}
            text="Amanda Almeida"
            className="lg:text-base text-xl dark:text-white"
          />
        </a>

        <ul className="flex max-lg:flex-col gap-8 lg:items-center ">
          <LinkHeader
            onClick={Click}
            className={
              currentPath === "/"
                ? "lg:text-xs text-sm text-primary"
                : "lg:text-xs text-sm text-gray1 dark:text-white hover:text-primary dark:hover:text-primary"
            }
            link={"/"}
            text="Projetos"
          />
          <LinkHeader
            onClick={Click}
            link={"/sobre"}
            className={
              currentPath === "/sobre"
                ? "lg:text-xs text-sm text-primary "
                : "lg:text-xs text-sm text-gray1 dark:text-white hover:text-primary dark:hover:text-primary"
            }
            text="sobre"
          />
          <LinkHeader
            onClick={Click}
            className={
              currentPath === "/contato"
                ? "lg:text-xs text-sm text-primary "
                : "lg:text-xs text-sm text-gray1 dark:text-white hover:text-primary dark:hover:text-primary"
            }
            link={"/contato"}
            text="contato"
          />
          <ItemHeader
            link="https://github.com/MandaAlmeida"
            children={<GithubLogo size={20} />}
            text="GitHub"
          />

          <ItemHeader
            link="https://www.linkedin.com/in/amanda-almeida-bab4541ab/"
            children={<LinkedinLogo size={20} />}
            text="Linkedin"
          />
        </ul>
      </section>
      <section
        className={`
        w-10 h-5  bg-gray3 flex items-center p-1 rounded-full cursor-pointer ml-8
      `}
        onClick={darkMode}
      >
        <div
          className={`w-[15px] h-[15px] bg-gray2 rounded-full transition-transform duration-500 ease-in-out ${
            active ? "transform translate-x-[15px]" : ""
          }`}
        ></div>
      </section>
    </header>
  );
}

export default Header;
