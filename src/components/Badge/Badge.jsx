import React from "react";
import "../components.css";

export default function Badge({ children, badgeColors, pill }) {
  const badgeClass = badgeColors ? `${badgeColors}` : "";
  const badgeType = pill === true ? "pill" : "";

  return (
    <div className={`badge ${badgeClass} ${badgeType}`}>
      <h2>{children}</h2>
    </div>
  );
}
