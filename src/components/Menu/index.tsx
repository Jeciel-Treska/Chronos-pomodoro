import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]); // executa apenas qunado o valor de theme mudar

  // useEffect(() => {
  //   console.log("", Date.now());
  // });  Executado toda vezx que o componente renderiza na tela

  // useEffect(() => {
  //   console.log("", Date.now());
  // }, []);  executa apenas quando o react monta o componente na tela pela primeira vez

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para home"
        title="Ir para home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para configurações"
        title="Ir para configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
