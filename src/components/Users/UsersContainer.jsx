import React from 'react';
import {connect} from 'react-redux';
import {
  follow, requestUsers, unfollowUser,
  toggleFollowingProgress,
  unfollow, followUser
} from '../../Redux/users-reduser';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress, getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);

  }

  onPageChanged = (page) => {

    this.props.getUsers(page, this.props.pageSize);

  };

  render() {


    return <>
      {this.props.isFetching
        ? <Preloader/>
        : <Users totalUsersCount={this.props.totalUsersCount}
                 pageSize={this.props.pageSize}
                 onPageChanged={this.onPageChanged}
                 users={this.props.users}
                 currentPage={this.props.currentPage}
                 followingInProgress={this.props.followingInProgress}
                 unfollowUser={this.props.unfollowUser}
                 followUser={this.props.followUser}

        />
      }
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default compose(connect(mapStateToProps, {
  follow, unfollow, toggleFollowingProgress, getUsers: requestUsers, unfollowUser, followUser
}), withAuthRedirect)(UsersContainer);