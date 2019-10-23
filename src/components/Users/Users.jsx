import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/userimage.png'

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items);
      });

  }

  return (
    <div>
      {
        props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.photos.small != null ? u.photos.small : userAvatar} alt="avatar"/>
              </div>
            </span>
            <span>
              <div>
                {u.followed
                  ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                  : <button onClick={() => props.follow(u.id)}>Follow</button>}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            {/*<span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>*/}
          </div>
        ))

      }
    </div>
  )
};

export default Users;