import React from "react";
import styles from "../styles/About.module.scss"

const About = () => {
   return (
      <>
         <h1>About</h1>
         <p className={styles.text}>this is fun</p>
         <style jsx>{`
            h1 {
               color: white;
               background: black;
            }
         `}</style>
      </>
   );
};

export default About;
