import React from 'react'; 
import loaderSrc from '../../assets/loader.gif';
const Loader = props => (
    <div>
        <img src={loaderSrc} alt="loader icon" style={{ width: 75 }}/>
    </div>
);

export default Loader;