import React, { useEffect, useState } from "react";
import "./ClickCopy.css";

const ClickCopy = ({ text, label, icon = "" }) => {
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!copiado) return;
    const timer = setTimeout(() => setCopiado(false), 3000);
    return () => clearTimeout(timer);
  }, [copiado]);

  const copyClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopiado(true);
  };

  return !copiado ? (
    <span onClick={copyClipboard} className="click-copy">
      {icon && <i className={"clip-icon " + icon} />}
      {label}
    </span>
  ) : (
    <span className="click-copy-copiado">
      <i className="clip-icon fas fa-check" />
      Copied!
    </span>
  );
};

export default ClickCopy;
