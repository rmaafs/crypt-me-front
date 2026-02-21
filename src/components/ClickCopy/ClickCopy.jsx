import React, { useCallback, useEffect, useState } from "react";
import KeyboardHint from "../KeyboardHint/KeyboardHint";
import "./ClickCopy.css";

const ClickCopy = ({ text, label, icon = "" }) => {
  const [copiado, setCopiado] = useState(false);

  const copyClipboard = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopiado(true);
  }, [text]);

  useEffect(() => {
    if (!copiado) return;
    const timer = setTimeout(() => setCopiado(false), 3000);
    return () => clearTimeout(timer);
  }, [copiado]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "c") {
        const selection = window.getSelection().toString();
        if (selection) return;

        e.preventDefault();
        copyClipboard();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [copyClipboard]);

  return (
    <span className="click-copy-wrapper">
      <span className={copiado ? "click-copy-hidden" : ""}>
        <span onClick={copyClipboard} className="click-copy">
          {icon && <i className={"clip-icon " + icon} />}
          {label}
        </span>
        <br />
        <KeyboardHint shortcut="Mod + C" description="to copy" />
      </span>
      <span
        className={"click-copy-copiado" + (copiado ? "" : " click-copy-hidden")}
      >
        <i className="clip-icon fas fa-check" />
        Copied!
      </span>
    </span>
  );
};

export default ClickCopy;
