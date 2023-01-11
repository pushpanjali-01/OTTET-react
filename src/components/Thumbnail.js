import React from "react";
// import Grid from './Grid';
const Tumbnail = ({ item }) => {
    return (
        
           
        <React.Fragment>
            <div  >
            <img className="" src={item.image_url.cover} alt=""/>
            <h5 className="">{item.title}</h5>
            </div>
        </React.Fragment>

    )
}
export default Tumbnail;