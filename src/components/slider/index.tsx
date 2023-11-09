import Language from "./components/language";

function SimpleSlider() {
  const languages = [
    { bgColor: "#FF4D00", text: "Git" },
    { bgColor: "#2BE5E9", text: "React" },
    { bgColor: "#FF0000", text: "Html" },
    { bgColor: "#001AFF", text: "Css" },
    { bgColor: "black", text: "Github" },
    { bgColor: "#04B400", text: "Node.js" },
    { bgColor: "#DB00FF", text: "Vtex" },
    { bgColor: "#00B7C2", text: "Tailwind" },
    { bgColor: "#FFE500", text: "Javascript" },
    { bgColor: "#0085FF", text: "Typescript" },
    { bgColor: "#FA00FF", text: "Sass" },
    { bgColor: "#8000FF", text: "Vite" },
  ];
  return (
    <div className="w-full flex flex-wrap gap-10 justify-center">
      {languages.map((language, index) => (
        <Language key={index} bgColor={language.bgColor} text={language.text} />
      ))}
    </div>
  );
}

export default SimpleSlider;
