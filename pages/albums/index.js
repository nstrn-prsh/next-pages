import Link from "next/link";
import React from "react";

const Albums = ({ albums }) => {
   return (
      <ul>
         {albums.map((item) => (
            <li key={item.id}>
               <Link href={`/albums/${item.id}`}>{item.title}</Link>
            </li>
         ))}
      </ul>
   );
};

export default Albums;

export async function getServerSideProps(context) {
   const { params, req, res, query } = context;
   console.log(query, "query");
   const response = await fetch("https://jsonplaceholder.typicode.com/albums");
   const data = await response.json();

   return {
      props: { albums: data },
   };
}
