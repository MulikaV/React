import React from 'react';
import {getUserProfile, getUserProfileStatus} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getUserProfile(userId);
    this.props.getUserProfileStatus(userId);
  }

  render() {
    debugger;
    return (
      <div>
        <Profile profile={this.props.profile} status={this.props.status}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(connect(mapStateToProps, {getUserProfile,getUserProfileStatus}),withRouter,withAuthRedirect)(ProfileContainer);