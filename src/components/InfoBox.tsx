import { type ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProp = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProp = HintBoxProps | WarningBoxProp;

export default function InfoBox(props: InfoBoxProp) {
  if (props.mode === "hint") {
    return <aside className="infobox infobox-hint">{props.children}</aside>;
  }
  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>{props.mode}</h2>
      {props.children}
    </aside>
  );
}
