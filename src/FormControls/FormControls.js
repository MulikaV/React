import React from "react";

export const Textarea = ({input, meta, ...props}) => {
  return <div className="form-group">
    <textarea {...input} {...props} className="form-control" rows={"3"}/>

    {meta.touched && meta.error &&
    <div className="alert alert-danger">{meta.error}</div>}

  </div>

};

