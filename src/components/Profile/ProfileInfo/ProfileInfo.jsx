import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userAvatar from './../../../assets/images/userimage.png';
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData";
import {maxLength50} from "../../../utils/validators/validators";
import EditProfileDataForm from "./EditProfileData";


const ProfileInfo = ({profile, status, updateStatus, uploadAvatarImage, isOwner, updateProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }


    const addImage = (e) => {
        const photo = e.target.files[0];
        uploadAvatarImage(photo);
    };

    const activateEditMode = () => {
        setEditMode(true);
    };

    const formSubmit = (formData) => {
        updateProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    };

    return (

        <div>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src={profile.photos.large != null ? profile.photos.large : userAvatar}/>
                    {isOwner && <input type={"file"} onChange={addImage}/>}
                </div>
                <div className={s.user_info}>
                    <div className={s.fullNameBlock}>
                        {isOwner && <button className={s.editButton} onClick={activateEditMode}>Edit </button>}
                        <h2>{profile.fullName}</h2>
                    </div>

                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    {editMode
                        ? <EditProfileDataForm initialValues={profile} profile={profile} onSubmit={formSubmit}/>
                        : <ProfileData profile={profile}/>}

                    {/*
          <h5><b>About Me</b> : {profile.aboutMe}</h5>
          <h5><b>Job</b> : {profile.lookingForAJob && profile.lookingForAJobDescription }</h5>
          <h5> <b>Contacts</b> :</h5>
          {Object.keys(profile.contacts).map(key =>{
              return <h6 className={s.contacts}><b> {key} </b>:   {profile.contacts[key]}</h6>
          })}*/}


                </div>

            </div>


        </div>
    )
};

export default ProfileInfo;