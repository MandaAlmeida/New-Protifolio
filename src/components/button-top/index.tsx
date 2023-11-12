interface ButtonTopProps {
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
  className?: string;
}

function ButtonTop(props: ButtonTopProps) {
  const { onClick, children, className } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Botão que leva ao topo da pagina"
      className={className}
    >
      {children}
    </button>
  );
}

export default ButtonTop;
