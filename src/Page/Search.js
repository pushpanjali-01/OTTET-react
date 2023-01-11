import React, { useState, useEffect } from "react";
import { apiFetch } from "../Service/Service";
import Thumbnail from "../components/Thumbnail";
import Searchinput from "../components/Searchinput";
import Keyboard from "../components/Keyboard";

const Search = () => {
  const [selectedkey, setSelectedkey] = useState("");
  const [newArray, setnewArray] = useState([]);
  const [searchdata, setSearchdata] = useState();
  useEffect(() => {
    apiFetch().then((data) => {
      setSearchdata(data);
    });
  }, []);

  const handleSearchClick = (item) => {
    var length = selectedkey.length;
    console.log("handleClick", item);
    setSelectedkey((old) => `${old}${item}`);

    if (item == "Clr") {
      setSelectedkey("")
    } else if (item == "⌫") {
      setSelectedkey(selectedkey.substring(0, length - 1));
    } else if (item == "|___|") {
      setSelectedkey(selectedkey.substring(0, length) + (" "));
    }
  };

  useEffect(() => {
    const newArray =
      searchdata &&
      searchdata.filter((e) => {
        return e.title.toLowerCase().includes(selectedkey.toLowerCase());
      });
    setnewArray(newArray);
    console.log(newArray);
  }, [selectedkey]);

  return (
    <React.Fragment>
      
      <div
      style={{backgroundColor:"black",height:"100vh"}}
      className="mainApp">
          <div 
           style={{backgroundColor:"black",height:""}}
          className="row">
            <div className="col-md-4">
            <Keyboard handleSearchClick={handleSearchClick}/>
            </div>
            <div className="col-md-8">
            <div
        style={{ height: "" }}
        className="main bg-black ">
        <Searchinput selectedkey={selectedkey} />
        <div className="row ">
       
          {selectedkey.length === 0 ? <p className=" text-white p-1"> search for thumbnail</p> :
            newArray && newArray.length > 0 ? (
              newArray.map((value) => {
                return (
                  
                  <div className="col-md-3 d-flex">
                    <div
                      className="card m-3">
                      <div className="card-body bg-black">
                        <Thumbnail item={value} />
                        
                      </div>
                    </div>
                  </div>
                );

              })
            ) : (
            <>
              <p className=" text-white display-5">Oh darn.We don't have that. </p>
              <p>Try Searching for another Movie.</p>
              </>
              
              
            )}
            
        </div>
      </div> 
</div>
          </div>
      </div>
       {/* <Keyboard handleSearchClick={handleSearchClick}/>
      <div
        style={{ height: "100vh" }}
        className="main bg-black ">
        <Searchinput selectedkey={selectedkey} />
        <div className="row">
       
          {selectedkey.length === 0 ? <p className=" text-white p-1">Type to search thumbnail..</p> :
            newArray && newArray.length > 0 ? (
              newArray.map((value) => {
                return (
                  
                  <div className="col-md-3 d-flex">
                    <div
                      className="card m-2">
                      <div className="card-body bg-black">
                        <Thumbnail item={value} />
                        
                      </div>
                    </div>
                  </div>
                );

              })
            ) : (
              <p className=" text-white">Match not found for input..</p>
            )}
            
        </div>
      </div> */}
    </React.Fragment>
  );
}
export default Search