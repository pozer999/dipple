import React from "react";
import SetPosts from '../Components/UI/SetPosts/SetPosts';
import ButtonToReturn from '../Components/UI/ButtonToReturn/ButtonToReturn';


export const Blog = () => {
  document.documentElement.scrollIntoView(true);
  
  return (
    <div>
        <SetPosts />
        <ButtonToReturn />
    </div>
  );
};

export default Blog;