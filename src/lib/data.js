// TEMPORARY DATA

import { connectToDB } from "./connectToDB";
import { Post, User } from "./models";

// const users = [
//     {id:1,name: 'John',},
//     {id:2,name: 'Mary',}
// ];

// const posts = [
//     {id:1,title: "post 1", body: "...........", userId:1},
//     {id:2,title: "post 2", body: "...........", userId:2},
//     {id:3,title: "post 3", body: "...........", userId:1},
//     {id:4,title: "post 4", body: "...........", userId:2}
// ];

export const getPosts= async () =>{
    // try{
        connectToDB();
        const posts = await Post.find();
        return posts;
    // }catch(err){
    //     console.log(err);
    //     throw Error("Failed to fetch Posts");
    // }
};


export const getPost= async (slug) =>{
    try{
        connectToDB();
        const post = await Post.find({slug});
        return post;
    }catch(err){
        // console.log(err);
        throw new Error("Failed to fetch Post");
    }
};

export const getUser= async (id) =>{
    try{
        connectToDB();
        const user = await User.findById(id)
        return user;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch User");
    }
};     
export const getUsers= async () =>{
    try{
        connectToDB();
        const users = await User.find();
        return users;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch Users");
    }
};