import React from "react";
import "./styles.css";

const InputField = () => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter your task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;