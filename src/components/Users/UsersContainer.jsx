import React from 'react';
import {connect} from 'react-redux';
import {
  follow, getUsers, unfollowUser,
  toggleFollowingProgress,
  unfollow, followUser
} from '../../Redux/users-reduser';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
  };
};


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);

  }

  onPageChanged = (page) => {

    this.props.getUsers(page, this.props.pageSize);

  };

  render() {

    if (!this.props.isAuth) return <Redirect to={"/login"} />

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


export default connect(mapStateToProps, {
  follow, unfollow, toggleFollowingProgress, getUsers,unfollowUser,followUser
})(UsersContainer);
