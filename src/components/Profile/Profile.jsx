import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile = {props.profile}
                   status = {props.status}
                   updateStatus={props.updateStatus}
                   uploadAvatarImage ={props.uploadAvatarImage}
                   isOwner={props.isOwner}
      />
      <MyPosts />
    </div>
  )
};

export default Profile;