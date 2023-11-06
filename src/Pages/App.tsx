import { useState } from "react";
import Header from "../components/header";

function App() {
  const [active, setActive] = useState(false);

  function openMenu() {
    setActive(!active);
    console.log(active);
  }
  return (
    <div className="mx-4 lg:mx-[7%] py-20 relative">
      <Header activeMenu={active} Click={openMenu} />
      <div
        className={
          active
            ? "bg-black-60 fixed w-[100vw] h-[100vh] top-0 left-0 z-40 py-20"
            : ""
        }
        onClick={openMenu}
      ></div>
      <h1 className="flex justify-center w-full">Home</h1>
    </div>
  );
}

export default App;
