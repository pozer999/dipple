import React from 'react';
import './OtherProjects.css';
import Project from '../Project/Project';

const OtherProjects = () => {
    return (
        <div className='OtherProject'>
            <div className='SuperService'>
                Другие суперсервисы
            </div>
            <div className='Projects'>
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    );
};

export default OtherProjects;