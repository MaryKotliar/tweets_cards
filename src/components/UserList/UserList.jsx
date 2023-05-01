import { UserCard } from 'components/UserCard/UserCard';
import { ListWrapper } from './UserList.styled';
import { useState } from 'react';
export const UserList = ({ users }) => {
  const [arr, setArr] = useState(() => {
    return JSON.parse(localStorage.getItem('followings')) ?? [];
  });

  return (
    <>
      <ListWrapper>
        {users.map(item => (
          <li key={item.id}>
            <UserCard user={item} arr={arr} setArr={setArr} />
          </li>
        ))}
      </ListWrapper>
    </>
  );
};
