import { useEffect, useState } from "react";

function Switch() {
  const [isOn, setIsOn] = useState(false);
  console.log(isOn);

  const dark = {
    "--body-background-color": "#070608ff",
    "--background-color": "var(--card-background-color)",
    "--colour-primary": "#fff",
    "--color-primary": "#fff",
    "--color": "#d6d6d6ff",
    "--color-white": "#333",
    "--card-background-color": "#333",
    "--color-invert": "var(--card-background-color)",
    "--navbar-background-color": "#444",
    "--black": "#111111ff",
  };
  const light = {
    "--body-background-color": "whitesmoke",
    "--background-color": "var(--card-background-color)",
    "--colour-primary": "rgba(0, 0, 0, 1)",
    "--color-primary": "rgba(0, 0, 0, 1)",
    "--color": "#000",
    "--color-white": "whitesmoke",
    "--card-background-color": "rgba(255, 255, 255, 0.943)",
    "--color-invert": "var(--body-background-color)",
    "--navbar-background-color": "rgba(255, 255, 255, 0.943)",
    "--black": "#020101",
    // "--header-link-indicator-background-color": "#111",
  };

  const theme = isOn ? dark : light;

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });
  });

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="switch"
      style={{
        ...theme,
        height: "30px",
        width: "50px",
        backgroundColor: "var(--color)",
        position: "relative",
        borderRadius: "15px",
        cursor: "pointer",
        // boxShadow: "0 0 10px rgba(20, 20, 20, 0.4)",
      }}
    >
      <div
        className="toggler"
        style={{
          height: "26px",
          width: "26px",
          backgroundColor: "#666666ff",
          borderRadius: "50%",
          position: "absolute",
          top: "2px",
          left: "2px",
          transition: "all .25s ease",
          transform: isOn ? "translateX(20px)" : "translateX(0px)",
        }}
      ></div>
    </div>
  );
}
export default Switch;
