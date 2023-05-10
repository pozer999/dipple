import React from 'react';
import classes from "../MyPost/MyPost.module.css";


const MyPost = (props) => {
  return (

      <div className={classes.posts}>
          <div className={classes.ratingPost}>Рейтинг: 0</div>
        <div className={classes.textFormatPost}>
          <div className={classes.publishDatePost}>2023-04-29 06:37</div>
          <div className={classes.titlePost}>Тестовая запись</div>
          <div className={classes.descriptionPost}>Описание Тестовой записи</div>
          <div className={classes.actionClickPost}>Подробнее</div>
        </div>
        <img className={classes.postImage} src="../images/d.jpg" alt="Изображение не загружено..."/>
      </div>
  );
};

export default MyPost;