import React, { useState, useMemo } from 'react';
import '../Navbar/Navbar.css';


const Navbar = ({theme}) => {

  let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг","Пятница","Суббота"];

 const [dayOfTheWeek, setDayOfTheWeek] = useState(0);
 
 useMemo(() => {
    setDayOfTheWeek(() => new Date().getDay())
 }, []);

  return (
    <div class="headerNavbar">
    <img class="logoDipple" src= '../images/footerLogo1.png' alt="Изображение не загружено..." />
    {/* <button onClick = {designTheme}>Смена темы</button> */}
    <div class={"dayOfTheWeek" + `${theme ? '_black' : ''}`}>{days[dayOfTheWeek]}</div>
   </div>
  );
};

export default Navbar;