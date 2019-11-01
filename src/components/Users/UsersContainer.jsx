import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from '../../Redux/users-reduser';
import * as axios from 'axios/index';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";



const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching
  };
};


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage,this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (page) => {
    console.log(page);
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    getUsers(page,this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
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
                 currentPage={this.props.currentPage}/>

      }
    </>
}}


export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);
