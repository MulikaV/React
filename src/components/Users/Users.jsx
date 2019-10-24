import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/userimage.png'

class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <div>
      {
        this.props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.photos.small != null ? u.photos.small : userAvatar} alt="avatar"/>
              </div>
            </span>
            <span>
              <div>
                {u.followed
                  ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                  : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
          </div>
        ))
      }
    </div>
  }
}

export default Users;