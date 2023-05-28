import React, {useState, useEffect, useRef} from 'react';
import MyPost from '../MyPost/MyPost';
import axios from "axios";
import classes from "../SetPosts/SetPosts.module.css";
import Loader from '../Loader/Loader';


const SetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const lastElement = useRef();
  let observer = useRef();

  // useEffect(() => {
  //   if(loadingPosts) return;
  //   if(observer.current) observer.current.disconnect();
  //   let callback = function(entries, observer){
  //      if (entries[0].isIntersecting && page < 100){ //здесь 100 надо поменять на totalCount, с бэка прийдет значение общего количества страниц
  //         console.log(page);
  //         setPage(page + 1);
  //         console.log(page);
  //      }
       
  //   }
  //   setLoadingPosts(true);
  //   observer.current = new IntersectionObserver(callback);
  //   observer.current.observe(lastElement.current);
  // }, [loadingPosts])


  useEffect(() => {
          fetchPosts(limit, page);
  }, [page]);

    

  async function fetchPosts(limit, page) {
  let response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
    params:{
      _limit : limit,
      _page: page
    }
  });

  let data = response.data;
  setPosts(data);
  setLoadingPosts(false);
  };

  return (
    <div>
        <div className={classes.posts}>
          {posts.map(post => 
          <MyPost key={Number(post.id)} post={post} to = {`/blog/${post.id}`}/>
          )}
        </div>
          <div ref={lastElement} style={{height: 20, background:"red"}}></div>
        {loadingPosts &&
           <Loader/>
        }
    </div>
  );  
};

export default SetPosts;