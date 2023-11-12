import clsx from "clsx";

interface LinkItensProps {
  text: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}

function LinkItens(props: LinkItensProps) {
  const { text, children, href, className } = props;
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={clsx("flex gap-3 font-bold hover:text-primary", className)}
    >
      {text}
      {children}
    </a>
  );
}

export default LinkItens;
