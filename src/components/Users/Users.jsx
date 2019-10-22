import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0){
    props.setUsers([
      {
        id: 1, avatarUrl: 'https://thumbs.dfs.ivi.ru/storage15/contents/a/d/13e9fd5d5a713d6c13c4b7ab19fa0d.jpeg',
        followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 2, avatarUrl: 'https://thumbs.dfs.ivi.ru/storage15/contents/a/d/13e9fd5d5a713d6c13c4b7ab19fa0d.jpeg',
        followed: true, fullName: 'Valera', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}
      },
      {
        id: 3, avatarUrl: 'https://thumbs.dfs.ivi.ru/storage15/contents/a/d/13e9fd5d5a713d6c13c4b7ab19fa0d.jpeg',
        followed: true, fullName: 'Oleg', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: 4, avatarUrl: 'https://thumbs.dfs.ivi.ru/storage15/contents/a/d/13e9fd5d5a713d6c13c4b7ab19fa0d.jpeg',
        followed: false, fullName: 'Makar', status: 'I am a boss', location: {city: 'Zp', country: 'Ukraine'}
      }
    ]);
  }


  return (
    <div>
      {
        props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.avatarUrl} alt="avatar"/>
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </div>
        ))

      }
    </div>
  )
};

export default Users;