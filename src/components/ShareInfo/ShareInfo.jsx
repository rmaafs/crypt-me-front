import React, { Fragment } from "react";
import ClickCopy from "../ClickCopy/ClickCopy";
import "./ShareInfo.css";
import Button from "../Button/Button";

const ShareInfo = ({ data, onBack }) => {
  const id = data.id;
  const secret = data.secret;
  const url = window.location.origin + "/#/" + id + "/" + secret;

  return (
    <Fragment>
      <div className="share-info">
        <p className="share-info-hint">
          Share this link with anyone you trust.
          <br />
          They will be able to read your message.
        </p>
        <ClickCopy
          text={url}
          label="Copy shareable link"
          icon="fas fa-link"
        />
        <div className="share-info-details">
          <div className="share-info-item">
            <span className="share-info-label">
              <i className="fas fa-fingerprint" /> ID
            </span>
            <span className="share-info-value">{id}</span>
          </div>
          <div className="share-info-item">
            <span className="share-info-label">
              <i className="fas fa-key" /> Secret
            </span>
            <span className="share-info-value">{secret}</span>
          </div>
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
