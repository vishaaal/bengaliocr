import { useEffect } from "react";
import "./SubBody.css";
import AOS from "aos";
import "aos/dist/aos.css";
const SubBody = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="subBody--container">
      <div className="subBody--grid--container">
        <div data-aos="fade-right" className="grid--container--left">
          <h1>Why</h1>
          <h1>Choose</h1>
          <h1>Us</h1>
        </div>
        <div data-aos="fade-left" className="grid--container--right">
          <p>
            Our team tries to solve the problem of recognizing the handwritten language just
            by simply uploading a picture . Our team has developed a state of the art classification
            system for robust perfomance which helps us to deliver results faster and at 0 cost to our 
            users. The wide range of letters present in the bengali literature hinders the accuracy of 
            most classifiers present in the web , except ours. Tested in ideal conditions with 
            ideal images , our classifier results 100% accuracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubBody;
