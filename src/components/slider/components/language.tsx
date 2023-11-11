interface LanguageProps {
  text: string;
  bgColor?: string;
}

function Language(props: LanguageProps) {
  const { text, bgColor } = props;
  return (
    <div className="flex gap-[10px] items-center font-bold uppercase py-3 px-7 border border-black dark:border-white rounded-full list-none cursor-pointer">
      <span
        style={{ backgroundColor: bgColor }}
        className="w-[10px] h-[10px] rounded-full"
      ></span>
      <span>{text}</span>
    </div>
  );
}

export default Language;
