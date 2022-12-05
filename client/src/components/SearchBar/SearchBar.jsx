import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { GetDogsName } from '../../redux/actions'
import './SearchBar.css'
import {searchDogName} from "../../redux/actions/index"

const Searchbar = () => {
  
  const dispatch = useDispatch();
  
  function handleSearch(e){
    e.preventDefault();
    
    console.log(e.target.value);
    dispatch(searchDogName(e.target.value))
  }
  return (
    <>
    <div>
      <div className="search">
      <input
      className="search"
      placeholder="Look for a dog breed!" 
        required=""
        type="text"
        onChange={(e)=>{ handleSearch(e)}}
      />
        
      

      </div>
    </div>
    </>
  );
};
export default Searchbar;

{/* <div class="search">
<input
class="search"
type="search"
placeholder="Look for a dog breed!"
value={input}
onChange={(e) => handleInputChange(e)}
></input>
<button type="submit" onClick={(e) => handleSubmit(e)}>
Search
</button>
</div> */}

  // const [input, setInput] = useState("");
  // const name = useSelector((state) => state.Dogs);
  // function handleInputChange(e) {
  //   e.preventDefault();
  //   setInput(e.target.value);
  // }
  // function handleSubmit(e) {
  //   let nodogs = name.find(
  //     (el) => el.name?.toLowerCase() === input.trim()?.toLowerCase()
  //   );
  //   if (input.trim().length === 0) {
  //     setInput("");
  //     return alert("Blank spaces are not allowed in the searchbar");
  //   } else if (!nodogs) {
  //     setInput("");
  //     return alert("El perro buscado no existe.");
  //   } else if (input.length > 2) {
  //     e.preventDefault();
  //     dispatch(GetDogsName(input));
  //     setInput("");
  //   } else {
  //     alert("Introduce a valid search value with at least 3 characters.");
  //     setInput("");
  //   }
  // }