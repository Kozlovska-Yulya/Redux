import React from 'react';
import { connect } from 'react-redux';
import { nextPage, prevPage } from '../users.actions.js';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

const UsersList = ({ users, nextPage, prevPage }) => {
  const itemsPerPage = 3;
  const { usersList, currentPage } = users;
  const startIndex = currentPage * itemsPerPage;

  return (
    <>
      <Pagination
        goPrev={prevPage}
        goNext={nextPage}
        currentPage={currentPage}
        totalItems={usersList.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersList.slice(startIndex, startIndex + itemsPerPage).map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </>
  );
};

const mapState = (state) => {
  return {
    users: state,
  };
};

const mapDispatch = {
  nextPage,
  prevPage,
};
const connector = connect(mapState, mapDispatch);
export default connector(UsersList);
