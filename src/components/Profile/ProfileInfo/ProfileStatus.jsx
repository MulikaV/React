import React, {useEffect, useState} from "react"
import style from './ProfileInfo.module.css';


const ProfileStatus = (props) => {


  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);
  
  
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  return <div>
    {editMode
      ? <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
               value={status}/>
      : <h4 className={style.changeStatus} onClick={activateEditMode}>  {props.status || "--------"}</h4>
    }
  </div>
};

export default ProfileStatus;
