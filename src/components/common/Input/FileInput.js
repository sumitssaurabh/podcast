import React, { useState } from "react";
import "./styles.css";


const FileInput = ({ accept, id, fileHandleFnc, text }) => {
  const [fileSelected, setFileSelected] = useState(false);

  const onChange = (event) => {
    console.log(event.target.files);
    setFileSelected(event.target.files[0].name);
    fileHandleFnc(event.target.files[0]);
  };

  return (
    <>
      <label htmlFor={id} 
      className=
      {`custom-input ${!fileSelected  ? "label-input" : "active"}`}>
        {fileSelected ? `the Fie ${fileSelected} was Selected` : text}
        Import banner image
      </label>
      <input
        type="file"
        accept={accept}
        id={id}
        style={{ display: "none" }}
        onChange={onChange}
      />
    </>
  );
};

export default FileInput;
