interface TitleProps {
  children?: React.ReactNode;
}

function Title(props: TitleProps) {
  const { children } = props;
  return (
    <h1 className="text-[32px] lg:text-5xl uppercase font-bold">{children}</h1>
  );
}

export default Title;
