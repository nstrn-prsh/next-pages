import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
   return (
      <div className={styles.container}>
         <header>
            <Link href='/'>
               <h2>Boto Car</h2>
            </Link>
         </header>
         <div> {children}</div>
         <footer>
            <p>
               Buy Your Car{" "}
               <a href='#' target='_blank'>
                  here
               </a>
            </p>
         </footer>
      </div>
   );
};

export default Layout;
