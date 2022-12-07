import React from "react";
import { useDispatch } from "react-redux";
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