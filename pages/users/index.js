import Link from "next/link";
import React from "react";

const usersList = [
   { id: 1, name: "one" },
   { id: 2, name: "two" },
   { id: 3, name: "three" },
   { id: 4, name: "four" },
   { id: 5, name: "five" },
];

const Users = () => {
   return (
      <>
         <h1>Users List</h1>
         <p>user 1</p>
         <p>user 2</p>
         <ul>
            {usersList.map((user) => (
               <li key={user.id}>
                  <Link href={`/users/${user.id}`}> go to {user.name}</Link>
               </li>
            ))}
         </ul>
      </>
   );
};

export default Users;
