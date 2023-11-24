import { useRouter } from "next/router"
import { useEffect,useState } from "react"




const UserPageInfo = () => {
    const router = useRouter();
    const [userInfo,setUserInfo]= useState();
    useEffect(()=>{
        const id = router.query.id;
        async function getUserById(){
            const data = await fetch(`https://dummyjson.com/users/${id}`);
            setUserInfo(await data.json());
        }
        getUserById();
    },[router.query.id])
  return (
    <div>
      <h1>{userInfo?.firstname}</h1>
      <h1>{userInfo?.email}</h1>
    </div>
  )
}

export default UserPageInfo
