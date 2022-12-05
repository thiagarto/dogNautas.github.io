import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Nav from "../Nav/Nav";
import gif from "../../assets/gif-2.gif";
import { useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const [dog, setDog] = useState({});
  let { name } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/dogs/${name}`)
      .then((response) => response.json())
      .then((response) => setDog(response))
      .catch((error) => {
        window.location.replace("/*");
      });
  }, []);

  return (
    <>
      <div className="detail">
        <Nav />
        <div
          className="loading"
          style={!dog.name ? { display: "block" } : { display: "none" }}
        >
          <img
            src={gif}
            alt="SE PUDRIO EL SOQUE"
            height="300"
            width="300"
          ></img>
          <p> LOADING!</p>
        </div>
        <div style={dog.name ? { display: "block" } : { display: "none" }}>
          <div className="detail2">
            <img
              src={dog.image?.url}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://cdn.com.do/wp-content/uploads/2016/08/PERRO-CHINA.jpg";
              }}
              alt="Dog NOT FOUND"
            ></img>
              
      <div className="text">
              <div><h2>Name: </h2>{dog.name}</div>
            <div><h2>Life span:</h2> {dog.life_span} years</div>
            <div><h2>Weight:</h2> {dog.weight?.metric} Kg.</div>
            <div><h2>Height:</h2> {dog.height?.metric} Cm.</div>
            <div><h2>Temperaments:</h2> {dog.temperament?.map((el) => el.name)}</div>
            <div><h2>Origin:</h2> {dog.origin ? dog.origin : "Unknown"}</div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;