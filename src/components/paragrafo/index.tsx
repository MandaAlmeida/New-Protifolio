interface ParagrafoProps {
  text: string;
}

function Paragrafo(props: ParagrafoProps) {
  const { text } = props;
  return <p className="text-2xl font-bold">{text}</p>;
}

export default Paragrafo;
