"use client";

import { useEffect } from "react";

const CopyCodeClient = () => {
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target instanceof HTMLButtonElement && target.dataset.copyCode) {
        const code = target.dataset.copyCode;
        if (!code) return;
        navigator.clipboard.writeText(code).then(() => {
          target.textContent = "Copied";
          setTimeout(() => {
            target.textContent = "Copy";
          }, 1200);
        });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
};

export default CopyCodeClient;
