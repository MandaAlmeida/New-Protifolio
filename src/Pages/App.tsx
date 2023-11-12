import { useState } from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import ButtonBar from "../components/buttons-bar";

function App() {
  const [active, setActive] = useState(false);
  const [darkMode, setDarkMode] = useState("");
  const [darkModeActive, setDarkModeActive] = useState(false);

  function handleDarkTheme() {
    darkMode === "dark"
      ? (setDarkMode(""), setDarkModeActive(false))
      : (setDarkMode("dark"), setDarkModeActive(true));
  }

  function handleOpenMenu() {
    if (window.innerWidth <= 1024) {
      setActive(!active);
      console.log(active);
    }
  }
  return (
    <div className={darkMode}>
      <div className="px-4 lg:px-[7%] py-20 relative flex flex-col items-center gap-20 lg:gap-32 dark:text-white dark:bg-dark h-full">
        <Header
          activeMenu={active}
          Click={handleOpenMenu}
          darkMode={handleDarkTheme}
          active={darkModeActive}
        />
        <div
          className={
            active
              ? "bg-black-60 fixed w-[100vw] h-[100vh] top-0 left-0 z-40 py-20"
              : "hidden"
          }
          onClick={handleOpenMenu}
        ></div>
        <Outlet />
        <ButtonBar />
      </div>
    </div>
  );
}

export default App;
