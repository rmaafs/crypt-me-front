import React, { Fragment, useEffect, useState } from "react";
import Card from "../Card/Card";
import TextArea from "../TextArea/TextArea";
import server from "../../server.json";
import ClickCopy from "../ClickCopy/ClickCopy";
import Button from "../Button/Button";
import HelpIcon from "../HelpIcon/HelpIcon";
import { useNavigate, useParams } from "react-router-dom";

const ViewContent = () => {
  const navigate = useNavigate();
  const { id, secret } = useParams();

  const [loading, setLoading] = useState(true);
  const [text, setText] = useState(null);
  const [title, setTitle] = useState("Loading...");

  const fetchData = () => {
    return new Promise((resolve) => {
      fetch(server.url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, secret: secret }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.text) {
            const decrypted = Buffer(data.text, "base64").toString("ascii");
            setText(decrypted);
            setTitle("Glup... Text decrypted!");
          } else if (data.error) {
            setTitle(data.error);
          }
        })
        .finally(() => {
          resolve(true);
          setLoading(false);
        });
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
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
