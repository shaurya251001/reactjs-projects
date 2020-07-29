import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.click}
    >
      <h1>Selected Option</h1>
      <p>{props.selectedOption}</p>
      <button onClick={props.click}>Okay</button>
    </Modal>
  );
};

export default OptionModal;
