import React, { useState } from "react";
import Searchinput from "../Page/Search";


const Key = ({ item,handleClick }) => {

    return (
        <>
        
            <div className="keyboarddata">
                <button
                    className="keybtn"
                    onClick={() => handleClick(item)}
                    >
                    {item}
                    {/* <Searchinput selectedkey={item} */}
                    

                   
                </button>
            </div>
        </>
    )
}
export default Key