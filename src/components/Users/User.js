import React from 'react';
import s from './Users.module.css';
import userAvatar from './../../assets/images/userimage.png'
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import {NavLink} from "react-router-dom";


const User = ({user,followingInProgress,unfollowUser,followUser} ) => {
  return (
  <Card  className={s.userCard}>
    <NavLink to={'/profile/' + user.id}>
      <img className={s.userAvatar} src={user.photos.small != null ? user.photos.small : userAvatar} alt="avatar"/>
    </NavLink>
    <CardBody>
      <CardTitle>
        <div>{user.name}</div>
      </CardTitle>
      <CardText>
        <div>{user.status}</div>
      </CardText>
      {user.followed
        ? <Button
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            unfollowUser(user.id);
          }}>Unfollow</Button>
        : <Button
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            followUser(user.id);
          }}>Follow</Button>}
    </CardBody>
  </Card>
  )
};

export default User;