import React from 'react';
import './../styles/UserPage.css';
import UserHeader from '../Components/UI/UserPage/UserHeader/UserHeader';
import UserStories from '../Components/UI/UserPage/UserStories/UserStories';

// import Avatar from '../Components/UI/UserPage/Avatar';
// import FullName from '../Components/UI/UserPage/fullName';
// import Schoolinfo from '../Components/UI/UserPage/Schoolinfo';



const UserPage = () => {
  return (
    <div>
      <UserHeader/>
      <UserStories/>
    </div>
  );
};

export default UserPage;

