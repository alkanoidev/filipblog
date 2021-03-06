import { useContext } from "react";
import { ThemeContext } from "../../context/Theme";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";

function TopAppBar({}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-[0.3rem]">
          <img
            src="/avatar.png"
            alt="avatar"
            className="rounded-full w-16 h-16 ring-2 ring-light dark:ring-dark"
          />
        </div>
        <div>
          <h1 className="tracking-wider">Filip</h1>
          <h2 className="text-xl tracking-wider">Front-End Developer</h2>
        </div>
      </div>
      <div>
        <button
          className="text-2xl"
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "light" ? <MdOutlineNightlight /> : <MdOutlineLightMode />}
        </button>
      </div>
    </div>
  );
}

export default TopAppBar;
