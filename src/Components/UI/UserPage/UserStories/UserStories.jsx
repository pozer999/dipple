import React from 'react';
import Storie from '../Storie/Storie';
import './UserStories.css';

const UserStories = () => {
    return (
        <div className='UserStories'>
            <Storie/>
            <Storie/>
            <Storie/>
        </div>
    );
};

export default UserStories;

