import { Container } from '../../components/Container/Container';
import { GoBackLink } from 'components/GoBankLink/GoBackLink';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { UserList } from '../../components/UserList/UserList';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { fetchUsers } from 'service/api';
import toast, { Toaster } from 'react-hot-toast';
export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setIsLoading] = useState(false);
  console.log(totalPages);
  console.log(currentPage);
  const limit = 3;
  const indexOfLastUser = currentPage * limit;
  const current = () => {
    if (selectedUsers.length > 0) {
      return selectedUsers.slice(0, indexOfLastUser);
    } else {
      return users.slice(0, indexOfLastUser);
    }
  };
  const currentUsers = current();
  // const currentUsers = selectedUsers.slice(0, indexOfLastUser);
  // console.log(currentUsers);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function showUsers() {
      try {
        setIsLoading(true);
        const users = await fetchUsers();
        setUsers(prevUsers => [...prevUsers, ...users]);
        setTotalPages(Math.ceil(users.length / limit));
      } catch {
        toast.error("This didn't work.Please try again later !");
      } finally {
        setIsLoading(false);
      }
    }
    showUsers();
  }, []);

  function loadMore() {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    return;
  }
  function onSelect(selectedOption) {
    if (selectedOption.value === 'show all') {
      setSelectedUsers(users);
    } else if (selectedOption.value === 'following') {
      const arr = JSON.parse(localStorage.getItem('followings')) || [];
      if (arr.length === 0) {
        toast.error('You have no followings tweets');
        setSelectedUsers([]);
      }
      const ides = arr.map(item => item.id);
      setSelectedUsers(users.filter(item => ides.includes(item.id)));
    } else if (selectedOption.value === 'follow') {
      const arr = JSON.parse(localStorage.getItem('followings')) || [];
      const ides = arr.map(item => item.id);
      setSelectedUsers(users.filter(item => !ides.includes(item.id)));
    }
  }
  return (
    <Container>
      {!isLoading && <GoBackLink to={backLinkHref}>Go Back</GoBackLink>}
      <Dropdown onSelect={onSelect} />
      {users.length > 0 && <UserList users={currentUsers} />}
      {currentUsers.length > 2 && totalPages !== currentPage && !isLoading && (
        <Button type="button" onClick={loadMore} text="LOADMORE" />
      )}

      <Toaster position="top-center" />
    </Container>
  );
};
