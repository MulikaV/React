import React from 'react';
import {getUserProfile} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getUserProfile(userId);
  }


  render() {

    if (!this.props.isAuth) return <Redirect to={"/login"} />

    return (
      <div>
        <Profile profile={this.props.profile} />
      </div>
    )
  }

};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));