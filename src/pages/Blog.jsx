import React from "react";
import SetPosts from '../Components/UI/SetPosts/SetPosts';
import ButtonToReturn from '../Components/UI/ButtonToReturn/ButtonToReturn';


export const Blog = () => {
  document.documentElement.scrollIntoView(true);
  
  return (
    <div>
          <ul style={{display: "flex" , justifyContent: "center"}}>
              <button>Дашборд</button>
              <button>Домашнее задание</button>
              <button>Категория 3</button>
          </ul>
        <SetPosts />
        <ButtonToReturn />
    </div>
  );
};

export default Blog;