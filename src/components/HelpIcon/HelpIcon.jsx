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
        space="preserve"
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
            👋 Your text will be encrypted before send to our servers and saved
            securely in our databases.
            <br />
            This means only you know the real message.
            <br />
            <br />
            <b>🔒 For your security:</b>
            <ul>
              <li>
                📋 The text will be readable 1 time, because after to read it,
                we will delete your encrypted message in our databases.
              </li>
              <li>
                👮‍♀️ If anyone try decrypt your message with a wrong secret, we
                will delete the record from our database, because we are
                avoiding brute force.
              </li>
              <li>
                ⌛ If your message is not readed after 24 hours, we will delete
                it.
              </li>
              <li>
                🔑 Before we encrypt your message, we will generate a{" "}
                <b>secret</b> randomized for you.
                <br />
                This secret is used to encrypt and decrypt your message
                securely. If you lost the secret, it is impossible decrypt the
                message.
                <br />
                <b>📢 We never save your secret.</b>
              </li>
            </ul>
            💻 If you are developer, check it out the console!
            <br />
            This is a OpenSource project.
            <br />
            You can see the GitHub repository and the API REST Postman
            Documentation! 🤓
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
