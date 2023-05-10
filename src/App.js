import React, {useState, useEffect} from "react";
import axios from "axios";
import classes from "../src/styles/App.module.css";
import Navbar from './Components/UI/Navbar/Navbar';
import SetPosts from './Components/UI/SetPosts/SetPosts';
import ButtonToReturn from './Components/UI/ButtonToReturn/ButtonToReturn';

function App() {
const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  } ,[]);

  async function fetchPosts() {
  let response = await axios.get("https://dummyjson.com/users");
  let data = response.data.users;
  setPosts(data);
  };

  return (
    <div className={classes.App}>
    <>
    {/* ------------------------------------------- */}
        <Navbar/>
        <SetPosts posts = {posts}/>
        <ButtonToReturn/>
    {/* ------------------------------------------- */}
    </> 
    </div>
   
  );
}

export default App;
