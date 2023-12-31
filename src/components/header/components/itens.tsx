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
      className="flex gap-[10px] items-center hover:text-primary dark:hover:text-primary text-gray1  dark:text-white"
    >
      {children}
      <strong className="max-lg:text-sm text-[0px] uppercase ">{text}</strong>
    </a>
  );
}

export default ItemHeader;
