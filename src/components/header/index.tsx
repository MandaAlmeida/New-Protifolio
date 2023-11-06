import LinkHeader from "./components/link";

function Header() {
  return (
    <ul className="flex gap-8">
      <LinkHeader link="projetos" />
      <LinkHeader link="sobre" />
      <LinkHeader link="contato" />
    </ul>
  );
}

export default Header;
