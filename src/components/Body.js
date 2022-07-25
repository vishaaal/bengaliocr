import Form from "./Form";
import "./Body.css";
import { useState } from "react";
const Body = () => {
  const [uploadClick, setUploadClick] = useState(false);
  return (
    <div className="body--container">
      <div className="body--container--mainHeading">
        <div class="typewriter">
          <p>Bengali OCR</p>
        </div>
        <span>Handwritten Character Classification </span>
      </div>
      <div className="body--container--animationText">
        {!uploadClick ? (
          <span>Please Upload Your File</span>
        ) : (
          <span>Your File is ready to be uploaded</span>
        )}
      </div>
      <div>
        <Form uploadBtnClick={uploadClick} uploadBtnHandler={setUploadClick} />
      </div>
    </div>
  );
};

export default Body;
