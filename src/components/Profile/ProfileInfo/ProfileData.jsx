import React  from "react"
import s from './ProfileInfo.module.css';

const ProfileData = ({profile}) => {

  return <div>
    <h5><b>About Me</b> : {profile.aboutMe}</h5>
    <h5><b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no" }</h5>
    <h5> <b>My skils</b> : {profile.lookingForAJobDescription }</h5>

    <h5> <b>Contacts</b> :</h5>
    {Object.keys(profile.contacts).map(key =>{
      return <h6 key={key} className={s.contacts}><b> {key} </b>:   {profile.contacts[key]}</h6>
    })}
  </div>
};

export default ProfileData;
