import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/userimage.png'
import {
  Card, CardText, CardBody,
  CardTitle, Button, PaginationItem, Pagination, PaginationLink
} from 'reactstrap';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setTotalUserCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = (pageNumber)=> {
    this.props.setCurrentPage(pageNumber);
    axios.get(` `)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    const count = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];
    for (let i = 1; i <= count; i++) {
      pages.push(i);
    }

    return <div>

      <Pagination className={s.pagination}>
        <PaginationItem>
          <PaginationLink first href="#"/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#"/>
        </PaginationItem>
        {
          pages.map(p => {
            if (this.props.currentPage === p ){
              return (
                <PaginationItem onClick={()=> this.onPageChanged(p)} active >
                  <PaginationLink href="#">
                    {p}
                  </PaginationLink>
                </PaginationItem>
              )
            }
            else {
              return (
                <PaginationItem onClick={()=> this.onPageChanged(p)} >
                  <PaginationLink href="#">
                    {p}
                  </PaginationLink>
                </PaginationItem>
              )
            }

          })
        }

        <PaginationItem>
          <PaginationLink next href="#"/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#"/>
        </PaginationItem>
      </Pagination>

      <div className={s.users}>
        {
          this.props.users.map( u => (

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