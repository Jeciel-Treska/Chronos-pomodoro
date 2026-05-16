import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";

type MassagesContainerProps = {
  children: React.ReactNode;
};

type AvailableThemes = "dark" | "light";

function getOppositeTheme(theme: string | null): AvailableThemes {
  return theme === "light" ? "light" : "dark";
}

export function MassagesContainer({ children }: MassagesContainerProps) {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme");

    return getOppositeTheme(storageTheme);
  });

  useEffect(() => {
    function syncTheme() {
      const currentTheme = document.documentElement.getAttribute("data-theme");

      setTheme(getOppositeTheme(currentTheme));
    }

    syncTheme();

    const observer = new MutationObserver(syncTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
    </>
  );
}
