import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nomatch() {
  let location = useLocation();

  return (
    <React.Fragment>
      <div className="css">
        <h1>
          No match found for  <code>{location.pathname}</code>
        </h1>
      </div>
    </React.Fragment>
  )
}
export default Nomatch;