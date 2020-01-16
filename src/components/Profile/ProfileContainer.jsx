import React from 'react';
import {getUserProfile, getUserStatus, uploadAvatarImage, updateStatus} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  refreshProfile(){
      let userId = this.props.match.params.userId;
      if (!userId) {
        userId = this.props.userId;
        if(!userId) {
          this.props.history.push("/login");
        }
      }
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
  }

  componentDidMount() {
      this.refreshProfile();
  }

  componentDidUpdate (prevProps){
      if(this.props.match.params.userId != prevProps.match.params.userId) {
          this.refreshProfile();
      }
  }

  render() {
    debugger;
    return (
      <div>
        <Profile profile={this.props.profile}
                 isOwner ={!this.props.match.params.userId}
                 status={this.props.status}
                 uploadAvatarImage ={this.props.uploadAvatarImage}
                 updateStatus={this.props.updateStatus}/>
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
  {getUserProfile, getUserStatus, updateStatus,uploadAvatarImage}), withRouter, withAuthRedirect)(ProfileContainer);