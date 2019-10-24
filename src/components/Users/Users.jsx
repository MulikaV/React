import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/userimage.png'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <div className={s.users}>
      {
        this.props.users.map(u => (
          <Card key={u.id} className={s.userCard}>
            <img className={s.userAvatar} src={u.photos.small != null ? u.photos.small : userAvatar} alt="avatar"/>
            <CardBody>
              <CardTitle>
                <div>{u.name}</div>
              </CardTitle>
              <CardText>
                <div>{u.status}</div>
              </CardText>
              {u.followed
                ? <Button onClick={() => this.props.unfollow(u.id)}>Unfollow</Button>
                : <Button onClick={() => this.props.follow(u.id)}>Follow</Button>}
            </CardBody>


          </Card>
        ))
      }
    </div>
  }
}

export default Users;