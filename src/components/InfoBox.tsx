import { type ReactNode } from "react";

type InfoBoxProp = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxProp) {
  if (mode === "hint") {
    return <aside className="infobox infobox-hint">{children}</aside>;
  }
  return (
    <aside className="infobox infobox-warning warning--medium">
      <h2>{mode}</h2>
      {children}
    </aside>
  );
}
