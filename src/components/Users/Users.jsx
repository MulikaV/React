import React from 'react';
import s from './Users.module.css';
import Pagination from "react-js-pagination";
import User from "./User";

const Users = ({currentPage,pageSize,totalUsersCount,onPageChanged,users,followingInProgress,unfollowUser,followUser}) => {
  return <div>
    <div className={s.left}>
      <Pagination
        hideDisabled
        activePage={currentPage}
        itemsCountPerPage={pageSize}
        totalItemsCount={totalUsersCount}
        pageRangeDisplayed={5}
        onChange={onPageChanged}
      />
    </div>

    <div className={s.users}>
      {
        users.map(u => (
          <User key={u.id} user={u}
                followingInProgress={followingInProgress}
                unfollowUser={unfollowUser}
                followUser={followUser}
          />
        ))
      }
    </div>
  </div>
};

export default Users;