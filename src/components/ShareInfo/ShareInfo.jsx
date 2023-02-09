import React, { Fragment } from "react";
import ClickCopy from "../ClickCopy/ClickCopy";
import "./ShareInfo.css";
import Button from "../Button/Button";

const ShareInfo = ({ data, onBack }) => {
  const id = data.id;
  const secret = data.secret;
  const url = window.location.origin + "/#/l?id=" + id + "&s=" + secret;

  return (
    <Fragment>
      <div className="share-info">
        <ClickCopy
          text={url}
          label="Click here to copy the link for decrypt the message"
          icon="fas fa-clipboard"
        />
        <br />
        <br />
        <div className="share-info-text">
          <b>ID:</b>
          <br />
          {id}
          <br />
          <br />
          <b>Secret:</b>
          <br />
          {secret}
        </div>
      </div>

      <div style={{ paddingTop: "30px" }}>
        <Button onClickNoAnimation={onBack}>
          <i className="btn-icon fas fa-arrow-left" />
          Home
        </Button>
      </div>
    </Fragment>
  );
};

export default ShareInfo;
