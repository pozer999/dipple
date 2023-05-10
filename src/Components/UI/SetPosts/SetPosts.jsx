import React from 'react';
import MyPost from '../MyPost/MyPost';
import classes from "../SetPosts/SetPosts.module.css";


const SetPosts = ({posts}) => {
  return (
    <div>
      <div className={classes.posts}>
         {posts.map(post => 
      <MyPost post={post}/>
      )}
      </div>
    </div>
  );  
};

export default SetPosts;