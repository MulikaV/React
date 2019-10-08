import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.content}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w2ItqPyvah_o6wduaZeMqjxXtG7HvQm8UlFwMHZk__VYciYcAg"
          alt=""/>
      </div>
      <div className={s.description_block}>
        ava + description
      </div>

    </div>
  )
};

export default ProfileInfo;