import React from "react";

const AlbumId = ({ detail }) => {
   return (
      <h3>
         {detail.id}- {detail.title}
      </h3>
   );
};

export default AlbumId;

export async function getServerSideProps(context) {
   const { params } = context;
   const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${params.albumId}`
   );
   const detail = await response.json();

   if (!detail.id) {
      return {
         /*  notFound: true  */ redirect: { destination: "/albums" },
      };
   }

   return {
      props: { detail },
   };
}
