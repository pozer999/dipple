import React from 'react';

const Auth = () => {
  return (
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
  );
};

export default Auth;