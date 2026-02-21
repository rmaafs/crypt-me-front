import React from "react";
import "./TextArea.css";

const TextArea = ({ onChange, disabled, defaultText, onSubmit }) => {
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      if (onSubmit) onSubmit();
    }
  };

  return (
    <textarea
      placeholder="Glup glup glup..."
      disabled={disabled || false}
      onChange={(e) => onChange && onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      defaultValue={defaultText || ""}
    ></textarea>
  );
};

export default TextArea;
