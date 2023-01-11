import React, { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import List from "../components/List";
import { apiFetch } from "../Service/Service";
import Thumbnail from "../components/Thumbnail";

const Home = () => {
  const [value, setValue] = useState();
  const [item, setItem] = useState();
  const [modalopen, setModalopen] = useState(false);

  useEffect(() => {
    apiFetch()
      .then(data => {
        setValue(data);
      })

  }, []);
  console.log(value);

  const Viewall = () => {
    setModalopen(true);
  }

  const closeoldmodal = () => {
    setModalopen(!modalopen);
  }

  console.log(item)
  return (
    
    <React.Fragment>
      <div className="main bg-black">
      <div className="container1">
      
        {
          value && value.slice(0, 5).map((item) => {
            return (
              
              <Thumbnail
                item={item} />
            
            )
          }
          )
        }
        <button className="btn btn-outline-warning mt-4" onClick={Viewall} >VIEWALL</button>
        <Modal
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'black',
              display: 'inline-flex'
            },
            content: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: '1px solid #ccc',
              background: 'black',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
          isOpen={modalopen}
          class="Secondary"
          contentLabel="Example Modal">
          <div className="A">
            <h1>VIEWALL IMAGES</h1>
            <button class=" btn-outline-info" onClick={closeoldmodal}>Home</button>
          </div>
          {modalopen &&
            <div>
              {
                <List
                  value={value}
                />
              }
            </div>
          }
        </Modal>
        <div>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}
export default Home;

