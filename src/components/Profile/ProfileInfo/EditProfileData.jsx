import React from "react"
import s from './ProfileInfo.module.css';
import {Field, reduxForm} from "redux-form";
import styles from "../../FormControls/FormControls.module.css";

const EditProfileData = ({handleSubmit,profile,error}) => {

    return <form onSubmit={handleSubmit}>
      <div>
        <div><b>Full Name :</b></div>
        <div><Field name="fullName" component="input" /></div>
      </div>
        <div>
            <div><b>About Me :</b></div>
            <div><Field name="aboutMe" component="input"/></div>
        </div>
        <div>
            <div>
                <b>Looking for a job :</b>
            </div>
            <div>
                <Field component="input" type="checkbox" name="lookingForAJob"/>
            </div>
        </div>
        <div>
            <div><b>My skils :</b></div>
            <div><Field name="lookingForAJobDescription" component="input"/></div>
        </div>
        {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <div><b> {key} : </b></div>
                <div><Field name={"contacts." + key} component="input"/></div>
            </div>
        })}
        { error &&
        <div className={styles.invalidTooltip}>{error}</div>
        }
        <div className={s.block}>
          <button type="submit" className="btn btn-primary ">Save</button>
        </div>
    </form>
};

const EditProfileDataForm = reduxForm({form: 'editProfileData'})(EditProfileData);

export default EditProfileDataForm;
