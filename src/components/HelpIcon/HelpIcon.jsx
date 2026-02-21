import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

const HelpIcon = (props) => {
  const color = "#ccd6f6";

  const getIcon = () => {
    return (
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        //style="enable-background:new 0 0 512 512;"
        style={{
          width: "21px",
          position: "absolute",
          top: "7px",
          cursor: "pointer",
        }}
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <circle fill={color} cx="256" cy="378.5" r="25" />
              <path
                fill={color}
                d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256
				C512,114.516,397.503,0,256,0z M256,472c-119.377,0-216-96.607-216-216c0-119.377,96.607-216,216-216
				c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z"
              />
              <path
                fill={color}
                d="M256,128.5c-44.112,0-80,35.888-80,80c0,11.046,8.954,20,20,20s20-8.954,20-20c0-22.056,17.944-40,40-40
				c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40c-11.046,0-20,8.954-20,20v50c0,11.046,8.954,20,20,20
				c11.046,0,20-8.954,20-20v-32.531c34.466-8.903,60-40.26,60-77.469C336,164.388,300.112,128.5,256,128.5z"
              />
            </g>
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    );
  };

  return (
    <div style={{ textAlign: "right", maxWidth: props.maxWidth || "280px" }}>
      <Tooltip
        title={
          <div
            style={{
              fontSize: "12px",
              fontFamily: "rubik, sans-serif",
              fontWeight: "normal",
            }}
          >
            👋 Your message is encrypted <b>locally in your browser</b> before
            it ever leaves your device. We only receive and store the encrypted
            text — we never see the original message.
            <br />
            <br />
            <b>🔒 How it works:</b>
            <ul>
              <li>
                🔑 A random <b>5-character secret</b> is generated on your
                device. This secret encrypts your message using AES encryption
                right in your browser.
              </li>
              <li>
                📤 Only the <b>encrypted text</b> is sent to our server. The
                secret never leaves your device — it is included only in the
                shareable link.
              </li>
              <li>
                📥 When someone opens the link, the encrypted text is fetched
                from our server and <b>decrypted locally</b> in their browser
                using the secret from the URL.
              </li>
              <li>
                ⌛ If your message is not read after 24 hours, we will delete
                it.
              </li>
              <li>
                🚫 If you lose the secret, it is <b>impossible</b> to decrypt
                the message. We never store your secret.
              </li>
            </ul>
            💻 This is an open-source project.
            <br />
            Check out the repository on GitHub! 🤓
          </div>
        }
        arrow
      >
        {getIcon()}
      </Tooltip>
    </div>
  );
};

export default HelpIcon;
