import React from 'react';
import classes from "../MyPost/MyPost.module.css";
import { Link } from 'react-router-dom';


const MyPost = ({post, to}) => {
  return (

      <Link to = {to} post={post} className={classes.posts}>
          <div className={classes.ratingPost}>Рейтинг: {post.id}</div>
        <div className={classes.textFormatPost}>
          <div className={classes.publishDatePost}>2023-04-29 06:37</div>
          <div className={classes.titlePost}>Заголовок поста</div>
          <div className={classes.descriptionPost}>Описание поста Описание поста<br/> Описание поста Описание поста</div>
        </div>
        <img loading='lazy' className={classes.postImage} src="../images/d.jpg" alt="Изображение не загружено..."/>
      </Link>
  );
};

export default MyPost;