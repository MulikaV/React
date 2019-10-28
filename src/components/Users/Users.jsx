import React from 'react';
import s from './Users.module.css';
import userAvatar from './../../assets/images/userimage.png'
import {Card, CardText, CardBody,
  CardTitle, Button} from 'reactstrap';
import ReactPaginate from 'react-paginate';

const Users = (props) => {
  const totalPages = Math.ceil(props.totalUsersCount / props.pageSize);
  return <div>
    <div id="react-paginate" className={s.center}>
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={(e) => props.onPageChanged(e)}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>

    <div className={s.users}>
      {
        props.users.map(u => (
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
                ? <Button onClick={() => props.unfollow(u.id)}>Unfollow</Button>
                : <Button onClick={() => props.follow(u.id)}>Follow</Button>}
            </CardBody>
          </Card>
        ))
      }
    </div>
  </div>
};

export default Users;