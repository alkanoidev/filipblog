import { useThemeContext } from "../context/Theme";
import IconButton from "./Buttons/IconButton";

function TopAppBar({ children }: { children: any }) {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <div className="flex w-full justify-start items-start sm:items-center gap-3 flex-col sm:flex-row relative">
      <div className="flex items-center gap-2 min-w-max">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-[0.3rem]">
          <img
            src="/Avatar.webp"
            alt="avatar"
            className="rounded-full w-16 h-16 ring-2 bg-light dark:bg-dark transition-none ring-light dark:ring-dark"
          />
        </div>
        <div>
          <h2>Filip&apos;s Blog</h2>
        </div>
      </div>
      {children}
      <div className="absolute sm:relative right-0 top-5 sm:right-auto sm:top-auto">
        <IconButton
          onClick={toggleTheme}
          title="Toggle Theme"
          icon={
            theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )
          }
        />
      </div>
    </div>
  );
}

export default TopAppBar;
