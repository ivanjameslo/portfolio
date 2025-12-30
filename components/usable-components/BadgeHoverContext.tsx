"use client";

import * as React from "react";

type HoverContextType = {
  nextColor: () => "blue" | "yellow";
};

const HoverContext = React.createContext<HoverContextType | null>(null);

export function BadgeHoverProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = React.useState(0);

  const nextColor = React.useCallback(() => {
    setCount((c) => c + 1);
    return count % 2 === 0 ? "blue" : "yellow";
  }, [count]);

  return (
    <HoverContext.Provider value={{ nextColor }}>
      {children}
    </HoverContext.Provider>
  );
}

export function useBadgeHover() {
  const ctx = React.useContext(HoverContext);
  if (!ctx) {
    throw new Error("useBadgeHover must be used within BadgeHoverProvider");
  }
  return ctx;
}