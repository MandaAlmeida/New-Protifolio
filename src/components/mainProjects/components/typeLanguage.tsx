interface TypeLanguageProps {
  text: string;
}

function TypeLanguage(props: TypeLanguageProps) {
  const { text } = props;
  return (
    <span className="px-2 py-1 rounded-full bg-gray3 dark:bg-gray2 text-sm font-bold">
      {text}
    </span>
  );
}

export default TypeLanguage;
