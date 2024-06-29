import Link from "next/link";
import React from "react";
import useSWR from "swr";

const url = "https://jsonplaceholder.typicode.com/todos";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Todos = () => {
   // const [Todo, setTodo] = useState([]);

   /*    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
         .then((res) => res.json())
         .then((data) => setTodo(data));
   }, []);
    */
   const { data, error, isLoading } = useSWR(url, fetcher);

   return (
      <ul>
         {!data || isLoading ? (
            <span>no data</span>
         ) : (
            data.map((item) => (
               <Link href={`/todos/${item.id}`} key={item.id}>
                  <li>{item.title}</li>
               </Link>
            ))
         )}
      </ul>
   );
};

export default Todos;
