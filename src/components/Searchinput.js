import React from "react"
const Searchinput = (props) => {
    console.log(props.selectedkey)
    return (
        <React.Fragment>
            <div className="section">
                <div className="row mt-4">
                    <div className="col mt-5">
                        
                        <div 
                            style={{ width: "180px", height: "30px" }}
                            className="  card-text text-warning" >
                            {props.selectedkey}
                        </div>
                    </div> 
                </div>
            </div>
        </React.Fragment>

    )
}
export default Searchinput