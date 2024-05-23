import PostCard from "@/components/postCard/postCard";
import style from "./blog.module.css";
import {getPosts} from "@/lib/data";

// const getDate = async ()=>{
//      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:300}});
//      if(!res.ok){
//           throw new Error("Something went wrong! ")
//      }

//      return res.json()
// }


const BlogPage = async ()=>{
     //FETCH DATA WITH API
     // const posts = await getDate()
     
     //FETCH DATA WITHOUT API
     const posts = await getPosts();
    return(
        <div className={style.container}>
          {posts.map((post)=>(
            <div className={style.post} key={post.id}>
                 <PostCard post = {post}/>
            </div>
          ))}
            
        </div>
    )
}

export default BlogPage;