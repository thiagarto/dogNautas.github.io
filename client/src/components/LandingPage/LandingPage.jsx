import React from "react";
import styles from './../LandingPage/LandingPage.module.css'
import { Link } from "react-router-dom";


const LandingPage= () =>{
return (
    <>
     <div className={styles.root}>
      <div className={styles.positioning}>
        <h1 className={styles.title}>DogNAUTAS</h1>
          <Link to="/home" className={styles.btn}>
            <button className={styles.botoncitoo}>Start</button>
          </Link>
      </div>
    </div>
    </>
)
}
export default LandingPage;