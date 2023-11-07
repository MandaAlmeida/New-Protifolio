import { useState } from "react";
import Header from "../components/header";
import Home from "./Home";

function App() {
  const [active, setActive] = useState(false);

  function openMenu() {
    setActive(!active);
    console.log(active);
  }
  return (
    <div className="mx-4 lg:mx-[7%] py-20 relative flex flex-col items-center gap-32">
      <Header activeMenu={active} Click={openMenu} />
      <div
        className={
          active
            ? "bg-black-60 fixed w-[100vw] h-[100vh] top-0 left-0 z-40 py-20"
            : "hidden"
        }
        onClick={openMenu}
      ></div>
      <Home />
    </div>
  );
}

export default App;
