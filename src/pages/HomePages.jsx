import React, {useState, useEffect} from 'react';
import Loader from '../Components/UI/Loader/Loader';
import axios from 'axios';

export const HomePages = () => {
  document.documentElement.scrollIntoView(true);  // возврат в начало страницы

  const [loadingHomePages, setLoadingHomePages] = useState(true);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  
  useEffect(() => {
    console.log("limit:",limit);
    fetchHomePage(limit, page);
  }, [page]);

  async function fetchHomePage(limit, page) {
    let response = await axios.get("https://jsonplaceholder.typicode.com/photos",{
      params:{
        _limit : limit,
        _page: page
       }
      });
    let data = response.data;
    console.log("data setImages", Array.isArray(data),data);
    setImages([...data]);
    // console.log("обновили setImages", Array.isArray(images), images);
    setLoadingHomePages(false);
    // console.log("images: ", images);
    // console.log(data.url);
  }


    useEffect(() => console.log("images: ", images), [])

  return (
    <div>
      {loadingHomePages === true ?
        <Loader />
        : 
        <div style={{display: 'flex',  color: "white",  display: "flex",fontSize: "50px", flexDirection: "column", margin: "auto", justifyContent: "center", alignItems: "center"}}>
          <p>homePages</p> 
          {images.map(img => {
            // <img src={img.url} alt="noooooo" width={60}/>
            <p>{img.title} key = {img.title}</p>
            })
         }
          </div>
       
      }
    </div>
  );
};

export default HomePages;