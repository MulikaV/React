import React from 'react';
import s from './Users.module.css';
import userAvatar from './../../assets/images/userimage.png'
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import Pagination from "react-js-pagination";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";


const Users = (props) => {
  return <div>
    <div className={s.left}>
      <Pagination
        hideDisabled
        activePage={props.currentPage}
        itemsCountPerPage={props.pageSize}
        totalItemsCount={props.totalUsersCount}
        pageRangeDisplayed={5}
        onChange={props.onPageChanged}
      />
    </div>


    <div className={s.users}>
      {
        props.users.map(u => (

          <Card key={u.id} className={s.userCard}>
            <NavLink to={'/profile/' + u.id}>
              <img className={s.userAvatar} src={u.photos.small != null ? u.photos.small : userAvatar} alt="avatar"/>
            </NavLink>
            <CardBody>
              <CardTitle>
                <div>{u.name}</div>
              </CardTitle>
              <CardText>
                <div>{u.status}</div>
              </CardText>
              {u.followed
                ? <Button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.toggleFollowingProgress(true,u.id);
                  usersApi.unfollowUser(u.id)
                    .then(data => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingProgress(false,u.id);
                    });
                }}>Unfollow</Button>
                : <Button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  debugger;
                  props.toggleFollowingProgress(true,u.id);
                  usersApi.followUser(u.id)
                    .then(data => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingProgress(false,u.id);
                    });
                }}>Follow</Button>}
            </CardBody>
          </Card>

        ))
      }
    </div>
  </div>
};

export default Users;