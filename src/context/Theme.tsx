import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: any;
};
type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const useThemeContext = () => {
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext);

  return { theme, toggleTheme, setTheme };
};

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if ("theme" in localStorage) {
      setTheme(localStorage.theme);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, [theme]);

  const toggleTheme = () => {
    localStorage.theme = theme === "light" ? "dark" : "light";
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
