import React from 'react';
import {getUserProfile, getUserStatus, updateStatus} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.userId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    debugger;
    return (
      <div>
        <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId
});

export default compose(connect(mapStateToProps,
  {getUserProfile, getUserStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer);