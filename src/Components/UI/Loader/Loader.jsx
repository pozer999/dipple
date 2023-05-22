import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div>
       <div class = 'logo'>
          <div class = 'letter' style={{position:"relative"}}>P
              <div class = 'letter' style={{position:"absolute", bottom:0}}>D
               <div className="container"></div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Loader;
