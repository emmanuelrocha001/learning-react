import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const onFocus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: onFocus,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.inputPropName}>{props.label}</label>
      <input
        type={props.inputPropName}
        ref={inputRef}
        id={props.inputPropName}
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
