import { useRef, useState } from "react";
import "./Form.css";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";
const Form = ({ uploadBtnClick, uploadBtnHandler }) => {
  const formUploadBtn = useRef();
  const [file, setFilePath] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleFileUploadChange = (e) => {
    setFilePath(e.target.files[0]);
    uploadBtnHandler(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    setSubmit(true);
  };

  const handleUploadClick = () => {
    formUploadBtn.current.click();
  };
  return (
    <form className="form-handler">
      <div className="form-handler-borderBox">
        {!uploadBtnClick && (
          <BsFillCloudArrowUpFill
            onClick={handleUploadClick}
            fontSize="6em"
            className="form-handler-uploadIcon"
          />
        )}
        <input
          type="file"
          ref={formUploadBtn}
          onChange={handleFileUploadChange}
          accept="image/png, image/gif, image/jpeg"
          className="form-control"
          multiple=""
        />
        {uploadBtnClick && (
          <FiArrowRightCircle
            onClick={handleSubmit}
            className="form-handler-submitBtn"
            fontSize="5rem"
          />
        )}
      </div>
      {submit && <span>File has been Submitted</span>}
    </form>
  );
};

export default Form;
