import React, {useState} from 'react';
import Loader from '../Components/UI/Loader/Loader';
import UserPage from './UserPage';

const Auth = () => {
  document.documentElement.scrollIntoView(true);
  // const [loadingUserPage, setLoadingUserPage] = useState(true);
  const [accessIsAllowed, setAccessIsAllowed] = useState(false);
  return (
    <div>
      {/* {loadingUserPage === false ?
        <Loader />
      : 
      <> */}
        {accessIsAllowed ?
        <UserPage />
        :
        <div style={{fontSize: "30px", margin: "0 auto", display: "grid", justifyContent: "center"}}>
            <p style={{color: "white", marginTop: "30px"}}>Регистрация в дипл</p>
            <p style={{color: "white"}}>ФИО</p>
            <input type="text" />
            <p style={{color: "white"}}>Почта</p>
            <input type="email" />
            <p style={{color: "white"}}>Пароль</p>
            <input type="password" />
            <p style={{color: "white"}}>Подтверди пароль</p>
            <input type="password" />
            <p></p>
          <button style={{marginTop: "30px", fontSize: "20px", borderRadius: "10px", background:"rgba(14, 0, 33, 1)", color: "white", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", height: "35px"}} onClick = {() => setAccessIsAllowed(true)}>Зарегестрироваться</button>
          {/* при нажатии на копку зарегестрироваться будет переход на страницу пользователя */}
        </div>
        }
        {/* </>
      } */}
    </div>
  );
};

export default Auth;