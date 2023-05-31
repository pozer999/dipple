import React, {useState} from 'react';
import Loader from '../Components/UI/Loader/Loader';

export const HomePages = () => {
  document.documentElement.scrollIntoView(true);  // возврат в начало страницы

  const [loadingPost, setLoadingPost] = useState(true);

  return (
    <div>
      {loadingPost === false ?
        <Loader />
        : 
        <div style={{fontSize: "50px", display: "flex", justifyContent: "center", color: "white"}}>
          homePages
        </div>
      }
    </div>
  );
};

export default HomePages;