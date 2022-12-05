//PREGUNTAR SI ES IGUAL CON FETCH
import axios from 'axios'
export function getDogs() {
  return async function (dispatch) {
    await fetch("http://localhost:3001/dogs")
      .then((data) => data.json())
      .then((data) => dispatch({ type: "GET_DOGS", payload: data }));
  };
}
export function GetDogsName(name) {
  return async function (dispatch) {
    try {
      await fetch(`http://localhost:3001/dogs?name=${name}`)
        .then((data) => data.json())
        .then((data) => dispatch({ type: "GET_DOGS_NAME", payload: data }));
    } catch (error) {
      console.log(error);
    }
  };
}
export function getTemperament() {
  return async function (dispatch) {
    await fetch("http://localhost:3001/temperament")
      .then((data) => data.json())
      .then((data) => dispatch({ type: "GET_TEMPERAMENTS", payload: data }));
  };
}
export function FilterByTemperament(payload) {
  return {
    type: "FILTER_BY_TEMPERAMENT",
    payload,
  };
}
export function FilterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}
// export function getByName(data){
//   return async(dispatch)=>{
//     const result = await axios.get (`http://localhost:3001/dogs?name=${data}`)
//   dispatch((result.data))
//   }
// }
export function postDog(payload) {
  return async function () {
    await fetch("http://localhost:3001/dog", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  };
}

export const searchDogName=(name)=>async(dispatch)=>{
  return await axios.get(`http://localhost:3001/dogs?name=${name}`)
  .then(array=>dispatch({ type:"SEARCH_DOG",payload:array.data}))
}

export function Order(payload) {
  return {
    type: "ORDER",
    payload,
  };
}
