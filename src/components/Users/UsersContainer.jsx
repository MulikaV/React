import React from 'react';
import {connect} from 'react-redux';
import {
  follow, getUsers,
  toggleFollowingProgress,
  unfollow
} from '../../Redux/users-reduser';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
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
    return <>
      {this.props.isFetching
        ? <Preloader/>
        : <Users totalUsersCount={this.props.totalUsersCount}
                 pageSize={this.props.pageSize}
                 onPageChanged={this.onPageChanged}
                 users={this.props.users}
                 unfollow={this.props.unfollow}
                 follow={this.props.follow}
                 currentPage={this.props.currentPage}
                 toggleFollowingProgress={this.props.toggleFollowingProgress}
                 followingInProgress={this.props.followingInProgress}

        />

      }
    </>
  }
}


export default connect(mapStateToProps, {
  follow, unfollow, toggleFollowingProgress, getUsers
})(UsersContainer);
