import { useRouter } from "next/router";
import React from "react";

const Slugs = () => {
   const router = useRouter();
   console.log(router.query);
   const slugs = router.query.slugs ?? [];

   if (slugs.length > 1) {
      return (
         <h3>
            this article is written by {slugs[0]} at {slugs[1]}
         </h3>
      );
   }

   return (
      <button onClick={() => router.push("/")}>on click slugs</button>
   );
};

export default Slugs;
