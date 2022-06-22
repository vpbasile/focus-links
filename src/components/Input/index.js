import React, { useEffect, useRef, useState } from "react";
import { FormControl } from "react-bootstrap";
import "./index.scss";
export default function Input({
  label = "",
  value = "",
  setValue = () => {},
  rules = [],
  type = "text",
  append = "",
  prepend = "",
  as = "input",
  placeholder = null,
}) {
  const input = useRef();
  const message = useRef();
  const [focused, setFocused] = useState(false);

  const createCustomEvent = () => {
    input.current.onblur = () => {
      return rules.every((rule) => {
        const isValid = rule(value ?? "");
        if (isValid !== true) {
          message.current.innerText = isValid;
        } else {
          rules.length !== 0 && (message.current.innerText = "");
        }
        return isValid === true;
      });
    };
  };

  useEffect(() => {
    input.current.classList.toggle("focused", focused);
  }, [focused]);
  useEffect(createCustomEvent, [value]);

  return (
    <div ref={input} className="Input position-relative w-100 check-valid">
      <span className="text-start d-block w-100 fs-6 text-dark-blue me-2 mb-2">
        {label}
      </span>
      <div className={`input-box d-flex flex-center w-100 position-relative`}>
        {prepend}
        {React.createElement(FormControl, {
          as,
          type,
          placeholder,
          className: "border border-light-gray rounded transition",
          value: value ?? "",
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          onInput: ({ target }) => {
            setValue(target.value);
          },
        })}
        {append}
      </div>
      {rules.length !== 0 && (
        <p
          ref={message}
          className="message w-100 d-block text-danger text-start px-2 mb-0"
        ></p>
      )}
    </div>
  );
}
