import React, { Fragment, useRef, useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ShareInfo from "../ShareInfo/ShareInfo";
import TextArea from "../TextArea/TextArea";
import HelpIcon from "../HelpIcon/HelpIcon";
import KeyboardHint from "../KeyboardHint/KeyboardHint";
import { generateSecret, encrypt } from "../../utils/crypto";
import { saveMessage } from "../../services/api-worker";

const Form = () => {
  const [text, setText] = useState("");
  const [shareData, setShareData] = useState(null);
  const buttonRef = useRef(null);

  const sendInfo = async () => {
    if (!text.trim()) return;
    const secret = generateSecret();
    const encrypted = encrypt(text, secret);
    const data = await saveMessage(encrypted);

    if (!data.id) return;
    setShareData({ id: data.id, secret });
  };

  const handleSubmitShortcut = () => {
    buttonRef.current?.click();
  };

  return (
    <Card>
      {shareData ? (
        <Fragment>
          <h2>Message encrypted</h2>
          <HelpIcon maxWidth="350px" />
          <ShareInfo data={shareData} onBack={() => setShareData(null)} />
        </Fragment>
      ) : (
        <Fragment>
          <h2>Insert your message</h2>
          <HelpIcon maxWidth="350px" />

          <TextArea onChange={setText} onSubmit={handleSubmitShortcut} />
          <Button buttonRef={buttonRef} onClick={sendInfo}>
            <i className="btn-icon fas fa-share-alt" />
            Share
          </Button>
          <KeyboardHint shortcut="Mod + Enter" description="to share" />
        </Fragment>
      )}
    </Card>
  );
};

export default Form;
