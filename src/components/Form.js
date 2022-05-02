import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [file, setFilePath] = useState("");
  const handleFileUploadChange = (e) => {
    setFilePath(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
  };
  return (
    <div>
      <form className="form-handler" onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileUploadChange}
          className="form-control"
          multiple=""
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
