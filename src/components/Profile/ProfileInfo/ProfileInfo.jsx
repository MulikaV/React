import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.content}>
        <img
          src={props.profile.photos.large}
          alt=""/>
      </div>
      <div className={s.description_block}>
        ava + description
      </div>

    </div>
  )
};

export default ProfileInfo;