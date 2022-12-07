import React from "react";
import logoError from '../../assets/coraje.gif'
import { Link } from "react-router-dom";
import './error404.css'
const Error404= () =>{
return (
    <>
    <div className="container2">
      <div>
        <p>OOPS ERROR 404!</p>
      </div>
      <div>
        <p>SOMETHING WENT INCREDIBLY AWFULLY WRONG!</p>
           <div className="coraje">
        <Link to={'/home'}><button className='getback'> {"<="} Go Back </button></Link>
          <img src={logoError} alt="" />
            
        </div>
      </div>
      
    </div>
  </>
  
)
}
export default Error404;