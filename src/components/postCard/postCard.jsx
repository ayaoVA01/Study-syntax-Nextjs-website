import style from "./postCard.module.css"

import Image from "next/image"
import Link from "next/link"
const PostCard=({post})=>{
    return(
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.imgContainer}>
                    <Image src="/blogimg/b001.jpg" alt="" fill className={style.img}/>
                </div>
                <span className={style.date}>02.3.2024</span>
            </div>
            <div className={style.buttom}>
                <h2>{post.title}</h2>
                <p className={style.desc}>{post.body}</p>
                <Link href={`blog/${post.id}`} className={style.link}> READ MORE</Link> 
                
                
            </div>
        </div>
    )
}

export default PostCard