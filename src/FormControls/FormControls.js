import React from "react";

export const renderField = (input,meta,...props) => (
  <div>
    <label>{props.label}</label>
    <div>
      <input {...input} placeholder={props.label} type={props.type} />
      {meta.touched &&
      ((meta.error && <span>{meta.error}</span>) ||
        (meta.warning && <span>{meta.warning}</span>))}
    </div>
  </div>
)