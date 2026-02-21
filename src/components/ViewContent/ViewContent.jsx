import React, { Fragment, useEffect, useState } from "react";
import Card from "../Card/Card";
import TextArea from "../TextArea/TextArea";
import ClickCopy from "../ClickCopy/ClickCopy";
import Button from "../Button/Button";
import HelpIcon from "../HelpIcon/HelpIcon";
import { useNavigate, useParams } from "react-router-dom";
import { decrypt } from "../../utils/crypto";
import { getMessage } from "../../services/api-worker";

const ViewContent = () => {
  const navigate = useNavigate();
  const { id, secret } = useParams();

  const [loading, setLoading] = useState(true);
  const [text, setText] = useState(null);
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMessage(id);

        if (!data.message) {
          setTitle(data.error || "Message not found");
          return;
        }

        const decrypted = decrypt(data.message, secret);

        if (!decrypted) {
          setTitle("Invalid secret");
          return;
        }

        setText(decrypted);
        setTitle("Glup... Text decrypted!");
      } catch {
        setTitle("Error retrieving message");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <h2>{title}</h2>
      {!loading && text !== null ? (
        <Fragment>
          <HelpIcon maxWidth="400px" />
          <TextArea disabled={true} defaultText={text} />
          <div>
            <ClickCopy
              text={text}
              label="Click here for copy the message"
              icon="fas fa-clipboard"
            />
          </div>
        </Fragment>
      ) : null}
      {!loading && (
        <div style={{ paddingTop: "30px" }}>
          <Button onClickNoAnimation={() => navigate("/")}>
            <i className="btn-icon fas fa-arrow-left" />
            Home
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ViewContent;
