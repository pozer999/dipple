import React, {useState, useEffect, useRef} from 'react';
import MyPost from '../MyPost/MyPost';
import axios from "axios";
import classes from "../SetPosts/SetPosts.module.css";
import Loader from '../Loader/Loader';


const SetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [errorRequestToPosts, setErrorRequestToPosts] = useState(false);
  const lastElement = useRef();
  let observer = useRef();

  useEffect(() => {
    if(loadingPosts === false) return;
    if(observer.current) observer.current.disconnect();
    var callback = function(entries, observer){
       if (entries[0].isIntersecting && page < 10){ //здесь 100 надо поменять на totalCount, с бэка прийдет значение общего количества страниц
          setPage(page => page + 1)
       }  
    };
    // setLoadingPosts(true);
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [loadingPosts])

useEffect(() => {
  console.log("page: ", page);
})

  useEffect(() => {
        fetchPosts(limit, page);
  }, [page]);

  async function fetchPosts(limit, page) {
    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
        params:{
          _limit : limit,
          _page: page
         }
        }
      );

      let data = response.data.reverse();
      setPosts([...data, ...posts]);
      console.log("обновили setPosts: ", posts);
      setLoadingPosts(false);
      } catch (error) {
        console.error("Ошибка axios запроса постов", error);
          setTimeout(() => {
            setErrorRequestToPosts(true);
          }, 10000
        )
      }
        
      
  };

  return (
    <div>
        <div className={classes.posts}>
          {posts.map(post => 
          <MyPost key={post.id} post={post} to = {`/blog/${post.id}`}/>
          )}
        </div>
          <div ref={lastElement} style={{height: 0.001}}></div>
        {loadingPosts &&
           <Loader error = {errorRequestToPosts}/>
        }
    </div>
  );  
};

export default SetPosts;