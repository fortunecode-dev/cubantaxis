"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CloseMobileMenu() {
  const pathname = usePathname();

  useEffect(() => {
    const checkbox = document.getElementById("nav-open") as HTMLInputElement | null;
    const menu = document.getElementById("mobile-menu");

    const close = () => {
      if (checkbox) checkbox.checked = false;
    };

    // Cierra si haces clic en cualquier <a> dentro del menú
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a")) close();
    };

    menu?.addEventListener("click", onClick);

    // También cierra al cambiar de ruta (pathname cambia después de la navegación)
    close();

    return () => {
      menu?.removeEventListener("click", onClick);
    };
  }, [pathname]);

  return null;
}
