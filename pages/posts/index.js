import Link from "next/link";
import React from "react";

const Posts = ({ posts }) => {
   return (
      <section>
         <ul>
            {posts.map((item) => (
               <li key={item.id}>
                  <Link href={`/posts/${item.id}`} prefetch={false}>
                     {item.title}
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default Posts;

export async function getStaticProps() {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const posts = await res.json();

   return {
      props: { posts },
   };
}
