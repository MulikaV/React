import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userAvatar from './../../../assets/images/userimage.png'


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={s.profile}>
        <div className={s.avatar}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar }/>
        </div>
        <div className={s.user_info}>
          <h2>{props.profile.fullName}</h2>
          <h5>About Me : {props.profile.aboutMe}</h5>
          {props.profile.lookingForAJob && <h5>Job : {props.profile.lookingForAJobDescription} </h5>}
        </div>

      </div>


    </div>
  )
};

export default ProfileInfo;