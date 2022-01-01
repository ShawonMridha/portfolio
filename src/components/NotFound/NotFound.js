import React from 'react';
import notFound from '../image/page404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound">
             <h3>This page is error</h3>
            <img className="img-fluid img-thumbnail" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;