import React, {useState} from 'react';
import Loader from '../Components/UI/Loader/Loader';

const Auth = () => {
  document.documentElement.scrollIntoView(true);
  const [loadingPost, setLoadingPost] = useState(true);
 
  
  return (
    <div>
      {loadingPost === false ?
      <Loader />
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
        <button style={{marginTop: "30px"}} >Зарегестрироваться</button>
      </div>
      }
    </div>
  );
};

export default Auth;