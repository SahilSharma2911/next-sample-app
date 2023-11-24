import { useEffect,useState } from "react"
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res )=> res.json());

const UserPage = () => {

    const {data,error} = useSWR('https://dummyjson.com/users',fetcher)
    if(error){
        return <h1>Error Happened</h1>
    }
    if(!data){
        return <h1>Loading...</h1>
    }

    // const [users,setUsers] = useState([]);

    // useEffect(()=>{
    //     async function fetchUsers(){
    //         const data = await fetch('https://dummyjson.com/users');
    //         setUsers(await data.json());
    //     }
    //     fetchUsers();
    // },[]);

  return (
    <div>
      <h1>Users</h1>
      {
        data &&
        data.users &&
        data.users.map(user => 
            <Link href={`/users/${user.id}`} key={user.id}>
                <li>{user.firstName}</li>
            </Link>
        )
      }
    </div>
  )
}

export default UserPage
