
import PostUser from "@/components/postUser/postUser"
import style from "./singlePost.module.css"
import Image from "next/image"
import { Suspense } from "react"
import { getPost } from "@/lib/data"


// //FETCH DATA WITH API creat file data.js in lib folder
// const getDate = async (slug)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//     if(!res.ok){
//          throw new Error("Something went wrong! ")
//     }
//     return res.json()
// }
const SinglePostPage= async ({params})=>{
    const {slug} = params;
    //FETCH DATA WITH API
        // const post = await getDate(slug);
    //FETCH DATA WITHOUT API

    const post = await getPost(slug);
    console.log(post);
    return(
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image src="/blogimg/b002.jpg" alt=""  className={style.img} fill/>
            </div>
            <div className={style.textContainer}>
                <h3 className={style.title}>{post?.title}</h3>
                <div className={style.detail}>
                    <Image src="/blogimg/b002.jpg" className={style.avatar} alt="avatar" width={50} height={50}/>

                    {post && <Suspense fallback={<div>Loading....</div>}>
                        <PostUser userId = {post.userId}/>
                    </Suspense>}

                    <div className={style.detailText}>
                        <span className={style.detailTitle}>Private</span>
                        <span className={style.detailValue}>25.7.2024</span>
                    </div>
                </div>
                <div className={style.content}>
                    <p>{post?.body} </p>
                   
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage