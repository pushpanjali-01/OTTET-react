import React, { useState, useEffect } from "react";
import "./Api.css";
import { Link } from "react-router-dom";
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../components/Modal/Modal';

const ApiFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initalArraySize , setInitalArraySize] = useState(9);
  const [showModal, setShowModal] = useState(false);

  const getData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    setUsers(await response.json());
    setLoading(false);
  };

  const updateArraySize = () => {
    setInitalArraySize(50);
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(users);
  return (
    <>
      <h1>Akash Ranjan</h1>
      {loading ? (
        <div>Fetching Data & Loading...</div>
      ):(
          <div className="container">
        {users.slice(0,initalArraySize).map((curElem) => {
          return (
            <>
              <div className="imagecontainer" key={curElem.id}>
                <img
                  alt={curElem.url}
                  className="images"
                  src={curElem.url}
                ></img>
                <p onClick={() => setShowModal(true)}>{curElem.title}</p>
                <div>
                  <Link
                    to={`/description`}
                    state={{
                      id: curElem.id,
                      title: curElem.title,
                      url: curElem.url,
                      thumbUrl: curElem.thumbUrl,
                      fromHome: true,
                    }}
                  >
                    <button className="btn">Description</button>
                  </Link>
                </div>
              </div>
              <Modal
                show={showModal}
                setShow={setShowModal}
              >
                <ModalHeader>
                    <h2>{curElem.title}</h2>
                </ModalHeader>
                <ModalBody>
                    <img
                  alt={curElem.url}
                  className="images"
                  src={curElem.url}
                ></img>
                </ModalBody>
                <ModalFooter>
                    <button onClick={() => setShowModal(false)}>
                        Close
                    </button>
                </ModalFooter>
            </Modal>
            </>
          );
        })}
        {initalArraySize === 9 ? (<button onClick={updateArraySize}>View All</button>) : (null)}
      </div>
      )}

    </>
  );
};
export default ApiFetch;
