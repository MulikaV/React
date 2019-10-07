import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w2ItqPyvah_o6wduaZeMqjxXtG7HvQm8UlFwMHZk__VYciYcAg"
          alt=""/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  )
};

export default Profile;