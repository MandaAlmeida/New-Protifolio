import clsx from "clsx";

interface LanguageProps {
  text: string;
  className?: string;
}

function Language(props: LanguageProps) {
  const { text, className } = props;
  return (
    <div className="w-fit flex gap-[10px] items-center font-bold uppercase py-3 px-7 border border-black rounded-full list-none cursor-pointer">
      <span
        className={clsx("w-[10px] h-[10px] rounded-full", className)}
      ></span>
      <span>{text}</span>
    </div>
  );
}

export default Language;
