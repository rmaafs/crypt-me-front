import React, { Fragment, useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ShareInfo from "../ShareInfo/ShareInfo";
import TextArea from "../TextArea/TextArea";
import HelpIcon from "../HelpIcon/HelpIcon";
import { generateSecret, encrypt } from "../../utils/crypto";
import { saveMessage } from "../../services/api-worker";

const Form = () => {
  const [text, setText] = useState("");
  const [shareData, setShareData] = useState(null);

  const sendInfo = async () => {
    if (!text.trim()) return;
    const secret = generateSecret();
    const encrypted = encrypt(text, secret);
    const data = await saveMessage(encrypted);

    if (!data.id) return;
    setShareData({ id: data.id, secret });
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

          <TextArea onChange={setText} />
          <Button onClick={sendInfo}>
            <i className="btn-icon fas fa-share-alt" />
            Share
          </Button>
        </Fragment>
      )}
    </Card>
  );
};

export default Form;
