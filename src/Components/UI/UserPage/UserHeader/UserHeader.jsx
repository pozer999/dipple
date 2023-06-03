import React from "react";
import './UserHeader.css';



const UserHeader = () => {
    return (
        <header className='UserHeader'>
            <div className='UserContainer'>
                <img className="Avatar" src="./../images/UserPage/Avatar.png" alt="" />
                <div className="StudentInfo">
                    <div>Минуллина Камиля Руслановна</div>
                    <div>8А класс </div>
                </div>
            </div>
            <div className='SchollContainer'>
                <img className='SAC' src="./../images/UserPage/SquareAcademicCap.png" alt="" />
                <div className="School">Школа</div>
            </div>
            <div className="SchoolInfo">«Лицей №1 с углублённым изучением английского языка»</div>
        </header>
    );
};

export default UserHeader;