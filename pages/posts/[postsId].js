import { useRouter } from "next/router";
import React from "react";

const PostsId = ({ data }) => {
   const router = useRouter();

   if (router.isFallback) {
      return <h2>loading the fallback page!</h2>;
   }

   return <div>{data.body} </div>;
};

export default PostsId;

export async function getStaticPaths() {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
   const data = await res.json();
   const renderData = data.slice(0, 5);
   const paths = renderData.map((item) => ({
      params: { postsId: item.id.toString() },
   }));
   return {
      paths,
      //   fallback: false,
      fallback: true,
   };
}

export async function getStaticProps(context) {
   const { params } = context;
   const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postsId}`
   );
   const data = await res.json();

   //    age api maslan posts/102 call shode ke nadarimesh - bere safe 404
   if (!data.body) {
      return {
         notFound: true, //age nabood 404 true | false | blocking
         redirect: {destination : "/"}, // age nabood be safe asli redirect beshe
      };
   }

   return {
      props: { data },
      revalidate: 10, //ISR   
   };
}
