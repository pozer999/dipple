import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classes from "../Components/UI/MyPost/MyPost.module.css";
import Loader from '../Components/UI/Loader/Loader';


export const SinglePage = () => {

  const {id} = useParams();

  const [post, setPost] = useState('');
  const [loadingPost, setLoadingPost] = useState(true);

  useEffect(() => {
       fetchPosts(id);
  }, [id]);

  async function fetchPosts(id) {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = response.data;
    setPost(data);
    setLoadingPost(false);
    console.log("запрос для единичного поста");
    document.documentElement.scrollIntoView(true); // возврат в начало страницы
  };

  return (
    <div>
      {loadingPost ? 
      <Loader />
      :
      <div>
        <div className={classes.post_SinglePages}>
            <div className={classes.ratingPost_SinglePages}>Рейтинг: {post.id}</div>
            <div className={classes.textFormatPost_SinglePages}>
                <div className={classes.publishDatePost}>2023-04-29 06:37</div>
                <div className={classes.titlePost}>{post.title}</div>
            </div>
            <img className={classes.postImage_SinglePages} src="../images/d.jpg" alt="Изображение не загружено..."/>
        </div>
        <div className={classes.descriptionPost_SinglePage}>{post.body}<br/>{post.body}<br/>{post.body}<br/>{post.body}<br/>{post.body}<br/>{post.body}</div>
     </div>
    }
       
    </div>
  );
};

export default SinglePage;