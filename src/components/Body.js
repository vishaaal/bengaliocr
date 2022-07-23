import Form from "./Form";
import "./Body.css";
import { useState } from "react";
const Body = () => {
  const [uploadClick, setUploadClick] = useState(false);
  return (
    <div className="body--container">
      <div className="body--container--mainHeading">
        <p>Heading In the Middle</p>
        <span>Sub-heading</span>
      </div>
      <div className="body--container--animationText">
        {!uploadClick ? (
          <span>Please Upload Your File</span>
        ) : (
          <span>Your File has been uploaded</span>
        )}
      </div>
      <div>
        <Form uploadBtnClick={uploadClick} uploadBtnHandler={setUploadClick} />
      </div>
    </div>
  );
};

export default Body;
