import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/users-reduser";
import * as axios from "axios/index";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count));
    }
  };
};

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page.selected + 1);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page.selected + 1}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return  <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);;