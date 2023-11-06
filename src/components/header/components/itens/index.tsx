interface itemsProps {
  link: string;
  children: React.ReactNode;
  text: string;
}

function ItemHeader(props: itemsProps) {
  const { link, children, text } = props;
  return (
    <a
      target="_blank"
      href={link}
      rel="noopener noreferrer"
      className="flex gap-[10px] items-center"
    >
      {children}
      <strong className="text-sm uppercase text-gray1 hover:text-primary">
        {text}
      </strong>
    </a>
  );
}

export default ItemHeader;
