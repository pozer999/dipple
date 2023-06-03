import React from 'react';
import './../styles/UserPage.css';
import UserHeader from '../Components/UI/UserPage/UserHeader/UserHeader';
import UserStories from '../Components/UI/UserPage/UserStories/UserStories';
import OtherProjects from '../Components/UI/UserPage/OtherProjects/OtherProjects';
import Account from '../Components/UI/UserPage/Account/Account';
import Security from '../Components/UI/UserPage/Security/Security';
import TelegramDipple from '../Components/UI/UserPage/Telegram-Dipple/TelegramDipple';

const UserPage = () => {
  return (
    <div className='UserPage'>
      <UserHeader/>
      <UserStories/>
      <OtherProjects/>
      <Account/>
      <Security/>
      <TelegramDipple/>
    </div>
  );
};

export default UserPage;

