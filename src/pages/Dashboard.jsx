import React, {useState, useEffect} from 'react';
// import Loader from '../Components/UI/Loader/Loader';
// import axios from 'axios';
import '../styles/Dashboard.css';

export const Dashboard = () => {
  document.documentElement.scrollIntoView(true);  // возврат в начало страницы

  // const [loadingHomePages, setLoadingHomePages] = useState(true);
  // const [images, setImages] = useState([]);
  // const [page, setPage] = useState(0);
  // const [limit, setLimit] = useState(40);

  
  // useEffect(() => {
  //   console.log("limit: ",limit);
  //   fetchHomePage(limit, page);
  // }, [page]);

  // async function fetchHomePage(limit, page) {
  //   let response = await axios.get("https://jsonplaceholder.typicode.com/photos",{
  //     params:{
  //       _limit : limit,
  //       _page: page
  //      }
  //     });
  //   let data = response.data;
  //   setImages([...data]);
  //   setLoadingHomePages(false);
  // }
  //   useEffect(() => console.log("images: ", images), [images])

  return (
    <div className="DashboardHeader">
      {/* {loadingHomePages === true ?
        <Loader />
        : 
        <div style={{display: 'flex',  display: "flex",fontSize: "50px", flexDirection: "column", margin: "auto", justifyContent: "center", alignItems: "center"}}>
          <p>homePages</p> 
          {images.map(img => 
            <img key = {img.title} src={img.url} alt="noooooo" width={60}/>
            )
         }
          </div>
       
      } */}
      <div className="userContainer">
        <div className="firstLine">
          <img className="imageFirstLine" src="./../images/Dashboard/Avatar.png" alt="" />
          <img className="imageFirstLine" src="./../images/Dashboard/uved.png" alt="" />
          <img className="imageFirstLine" src="./../images/Dashboard/hat.png" alt="" />
        </div>
        <div className="classTitle">8А класс</div>
        <div className="linears">25 учеников</div>
      </div>
      <div className="noteContainer">
        <div className="noteTitle">Заметка №1</div>
        <div className="noteDescription">Ребят, завтра нужно принести карнавальные костюмы</div>
      </div>
    </div>
  );
};

export default Dashboard;