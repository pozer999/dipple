import React from "react";
import './UserHeader.css';



const UserHeader = () => {
    return (
        <header className='UserHeader'>
            <div className='UserContainer'>
                <img src="./../images/UserPage/Avatar.png" alt="" />
                <div>
                    <div>Минуллина Камиля Руслановна</div>
                    <div>8А класс </div>
                </div>
            </div>
            <div className='SchollContainer'>
                <img className='SAC' src="./../images/UserPage/SquareAcademicCap.png" alt="" />
                <div>Школа</div>
            </div>
            <div>«Лицей №1 с углублённым изучением английского языка»</div>
        </header>
    );
};

export default UserHeader;