import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div>
       <div className = 'letter' style={{position:"relative"}}>P
          <div className = 'letter' style={{position:"absolute", bottom:0}}>D
            <div className="animationContainer"></div> 
            {/* animationContainer перекрывает логотип с помощью анимации уменьшения высоты, 
            тем самым иллюзия загрузки*/}
          </div>
        </div>
    </div>
  );
};

export default Loader;
