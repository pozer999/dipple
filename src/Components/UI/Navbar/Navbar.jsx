import React, { useState, useMemo } from 'react';
import '../Navbar/Navbar.css';


const Navbar = ({theme}) => {

  let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг","Пятница","Суббота"];

 const [dayOfTheWeek, setDayOfTheWeek] = useState(0);
 
 useMemo(() => {
    setDayOfTheWeek(() => new Date().getDay())
 }, []);

  return (
    <div className="headerNavbar">
    <img className="logoDipple" src= '../images/logo.png' alt="Изображение не загружено..." />
    {/* <button onClick = {designTheme}>Смена темы</button> */}
    {/* <div className={"dayOfTheWeek" + `${theme ? '_black' : ''}`}>{days[dayOfTheWeek]}</div> */}
    <div style={{display: "flex"}}>
      <div style={{position: "relative"}}>
      <div className='counter'>0</div>
      <img className="right_navbar" src="../images/uved.png" alt="" />
      </div>
      <img className="right_navbar" src="../images/acc.png" alt="" />
    </div>
   </div>
  );
};

export default Navbar;