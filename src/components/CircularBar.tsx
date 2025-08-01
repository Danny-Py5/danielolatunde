import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CirclarBar({ value }: { value: number }): React.ReactElement {
  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: "#222",
          pathColor: "var(--color-primary)",
          trailColor: "#ddd",
        })}
      />
    </div>
  );
}
export default CirclarBar;

// Example usage: <CirclarBar value={80} />
