import React, { useState } from "react";

const TodoId = ({ todo }) => {
    const [data, setData] = useState(todo)
   const updateHandler = async (id) => {
      const res = await fetch(
         `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data = await res.json();
      setData(data)
   };

   return (
      <>
         <h1>{data.title}</h1>
         <button onClick={() => updateHandler(data.id)}>update</button>
      </>
   );
};

export default TodoId;

export async function getServerSideProps(context) {
   const { params } = context;
   const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
   );
   const data = await res.json();

   return {
      props: { todo: data },
   };
}
