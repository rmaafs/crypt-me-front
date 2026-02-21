import React, { useRef, useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [loading, setLoading] = useState(false);
  const mountedRef = useRef(true);

  React.useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const click = async () => {
    if (props.onClickNoAnimation) {
      props.onClickNoAnimation();
      return;
    }

    if (loading) return;

    setLoading(true);
    try {
      await props.onClick();
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  };

  return (
    <div onClick={loading ? () => {} : click} className="button">
      {loading ? <div className="spinner"></div> : props.children}
    </div>
  );
};

export default Button;
