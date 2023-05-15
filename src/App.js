import React, {useState} from "react";
import classes from "../src/styles/App.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import '../src/styles/LinksPages.css';
import Navbar from './Components/UI/Navbar/Navbar';


// pages
import {Blog} from './pages/Blog';
import {SinglePage} from './pages/SinglePage';
import {HomePages} from './pages/HomePages';



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
          <Navbar theme = {theme}/>
              <div className='header'>
                <NavLink to="/blog"      className={"navLink" + `${theme ? '' : '_black'}`}>Блог</NavLink>
                <NavLink to="/homePages" className={"navLink" + `${theme ? '' : '_black'}`}>Мой класс</NavLink>
              </div>
        <Routes>
            <Route path="blog" element={<Blog />}/>
            <Route path="homePages" element={<HomePages />}/>
            <Route path="blog/:id" element={<SinglePage />}/>
            <Route path="*" element={<Blog />}/>
        </Routes>
    </div>
   
  );
}

export default App;
