import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/userimage.png'
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import ReactPaginate from 'react-paginate';

class Users extends React.Component {

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

    const totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    return <div>

      <div id="react-paginate">
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={(e) => this.onPageChanged(e)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
      <div className={s.users}>
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
    </div>
  }
}

export default Users;