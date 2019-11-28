import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userAvatar from './../../../assets/images/userimage.png';
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = ({profile,status,updateStatus}) => {
debugger;
  if (!profile) {
    return <Preloader/>
  }

  return (

    <div>
      <div className={s.profile}>
        <div className={s.avatar}>
          <img src={profile.photos.large != null ? profile.photos.large : userAvatar }/>
        </div>
        <div className={s.user_info}>
          <h2>{profile.fullName}</h2>
          <ProfileStatus status={status }  updateStatus={updateStatus} />
          <h5>About Me : {profile.aboutMe}</h5>
          {profile.lookingForAJob && <h5>Job : {profile.lookingForAJobDescription} </h5>}
        </div>

      </div>


    </div>
  )
};

export default ProfileInfo;