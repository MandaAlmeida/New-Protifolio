interface LinkItensProps {
  text: string;
  href: string;
  children: React.ReactNode;
}

function LinkItens(props: LinkItensProps) {
  const { text, children, href } = props;
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex gap-3 text-xs font-bold"
    >
      {text}
      {children}
    </a>
  );
}

export default LinkItens;
