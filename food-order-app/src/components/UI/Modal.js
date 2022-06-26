import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>,
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </Fragment>,
    document.getElementById("modal-root")
  );
};

export default Modal;
