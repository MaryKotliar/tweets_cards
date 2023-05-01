import { UserCard } from 'components/UserCard/UserCard';
import { ListWrapper } from './UserList.styled';
export const UserList = ({ users }) => {
  return (
    <>
      <ListWrapper>
        {users.map(item => (
          <li key={item.id}>
            <UserCard user={item} />
          </li>
        ))}
      </ListWrapper>
    </>
  );
};
