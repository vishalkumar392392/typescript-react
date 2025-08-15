import React from "react";

type HintProps = {
  mode: "hint";
  children: React.ReactNode;
};

type WarningProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: React.ReactNode;
};

type InfoGoalProps = HintProps | WarningProps;

export const InfoGoal = (props: InfoGoalProps) => {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};
