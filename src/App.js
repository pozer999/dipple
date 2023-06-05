import React, {useState} from "react";
import classes from "../src/styles/App.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import '../src/styles/LinksPages.css';
// import Navbar from './Components/UI/Navbar/Navbar';


// pages
import {Blog} from './pages/Blog';
import {SinglePage} from './pages/SinglePage';
// import {HomePages} from './pages/HomePages';
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import UserPage from "./pages/UserPage";


function App() {

  const [theme, setTheme] = useState(true); // true - белая тема
                                            //false - темная тема
  // let bodyDoc = document.getElementById("root");
  // let designTheme = () =>{
  //   setTheme(!theme);
  //   console.log(theme);
  //   if(theme){
  //     bodyDoc.style.backgroundColor = 'white';
  //   }else{
  //     bodyDoc.style.backgroundColor = 'black';
  //   }
  // }

  return (
    <div className={classes.App}>
       {/* <button style={{position: "absolute", margin: "0 auto", left: 0, right: 0, width: "150px"}} onClick = {designTheme}>Смена темы</button> */}
          {/* <Navbar theme = {theme}/> */}
              {/* <div className='header'>
                <NavLink to="/blog"      className={"navLink" + `${theme ? '' : '_black'}`}>Блог</NavLink>
                <NavLink to="/homePages" className={"navLink" + `${theme ? '' : '_black'}`}>Мой класс</NavLink>
              </div> */}
        <Routes>
            <Route path="blog" element={<Blog />}/>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="blog/:id" element={<SinglePage />}/>
            <Route path="auth" element={<Auth />}/>
            <Route path="user" element={<UserPage />}/>
            <Route path="*" element={<Blog />}/>
            
        </Routes>
            <div className='header'>
              <NavLink to="/dashboard"      className={"navLink" + `${theme ? '' : '_black'}`}>
                <img src='../images/Footer/dashboard.png'></img>
                <div>Дашборд</div>
              </NavLink>
              <NavLink to="/blog" className={"navLink" + `${theme ? '' : '_black'}`}>
              <img src='../images/Footer/blog.png'></img>
              <div>Блог</div>
              </NavLink>
              <NavLink to="/user" className={"navLink" + `${theme ? '' : '_black'}`}>
              <img src='../images/Footer/gdz.png'></img>
              <div>Решебник</div>
              </NavLink>
              <NavLink to="/auth" className={"navLink" + `${theme ? '' : '_black'}`}>
              <img src='../images/Footer/user.png'></img>
              <div>Профиль</div>
              </NavLink>
            </div>
    </div>
   
  );
}

export default App;