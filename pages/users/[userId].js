import { useRouter } from "next/router";
import React from "react";

const User = () => {
   const router = useRouter();
   return <p>user # {router.query.userId}</p>;
};

export default User;
