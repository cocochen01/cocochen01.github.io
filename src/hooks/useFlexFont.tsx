import { useEffect } from "react";

export function useFlexFont() {
  useEffect(() => {
    const flexFont = () => {
      const profile = document.querySelector<HTMLElement>(".profile");
      const information = document.querySelector<HTMLElement>(".information");
      const imgElements = document.querySelectorAll<HTMLImageElement>(".imgID");

      if (profile) {
        const relFontsize1 = profile.offsetWidth * 0.03;
        profile.style.fontSize = `${relFontsize1}px`;
      }

      if (information) {
        const relFontsize2 = information.offsetHeight * 0.03;
        information.style.fontSize = `${relFontsize2}px`;
      }

      imgElements.forEach((img) => {
        const parent = img.parentElement as HTMLElement | null;
        if (parent) {
          const relWidth = parent.offsetHeight * 3;
          img.style.width = `${relWidth}px`;
        }
      });
    };

    window.addEventListener("resize", flexFont);
    flexFont();

    return () => {
      window.removeEventListener("resize", flexFont);
    };
  }, []);
}
