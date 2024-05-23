import { getUser } from "@/lib/data";
import style from "./postUser.module.css"

// const getDate = async (userId)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {ceche:"no-store"});
//     if(!res.ok){
//          throw new Error("Something went wrong! ")
//     }
//     return res.json()
// }

const PostUser = async ({userId})=>{
    //FETCH DATA WITH API
    // const user = await getDate(userId);

    //FETCH DATA WITHOUT API
    const user = await getUser(userId);
    return(
        <div className={style.container}>
            <span className={style.title}>Auter</span>
            {/* <span className={style.username}>{user.username}</span> */}
        </div>
    )
}

export default PostUser