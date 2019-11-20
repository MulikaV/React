import React from "react";
import styles from "./FormControls.module.css"



export const Textarea = ({input, meta, ...props}) => {
  return <div className="form-group row col-sm-offset-1">
    <textarea {...input} {...props}  className="form-control col-4" rows={"3"}/>

    {meta.touched && meta.error &&
    <div className="alert alert-danger">{meta.error}</div>}

  </div>

};

export const Input = ({input, type, label,meta}) => {
 const haserror = meta.touched && meta.error;
  return (
    <div className="form-group row">
      <div className={"col-sm-4 col-sm-offset-4" } >
        <input {...input} type={type} placeholder={label} className={"form-control" + " " + ( haserror ? styles.invalid : "")}/>
      </div>
      { haserror &&
      <div className={styles.invalidTooltip}>{meta.error}</div>}
    </div>
  )
};




export const Checkbox = ({input,label}) => (

    <div className="custom-control custom-checkbox ">
      <input type="checkbox" className={styles.checkbox}  id="defaultUnchecked"/>
      <label className={""} htmlFor="defaultUnchecked">{label}</label>
    </div>

);
