import React from "react";
import SetPosts from '../Components/UI/SetPosts/SetPosts';
import ButtonToReturn from '../Components/UI/ButtonToReturn/ButtonToReturn';


export const Blog = () => {
  document.documentElement.scrollIntoView(true);  // возврат в начало страницы
  
  return (
    <div>
      {/* переделать в соответствии с дизайном figma */}
          <ul style={{display: "grid" , justifyContent: "space-between", gridTemplateColumns: "1fr 1fr 1fr", height:"30px", marginTop: "10px"}}>
              <button style={{background: "blueviolet", color: "white", fontSize:"15px", borderRadius: "20px"}}>Дашборд</button>
              <button style={{background: "blueviolet", color: "white", fontSize:"15px", whiteSpace: "nowrap", borderRadius: "20px"}}>Домашнее задание</button>
              <button style={{background: "blueviolet", color: "white", fontSize:"15px", whiteSpace: "nowrap", borderRadius: "20px"}}>Категория 3</button>
          </ul>
        <SetPosts />
        <ButtonToReturn />
    </div>
  );
};

export default Blog;