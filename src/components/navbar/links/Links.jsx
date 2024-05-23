"use client";
import style from "./links.module.css";
import NavLink from "./navlink/navlink";
import { useState } from "react";
import Image from "next/image";


const links=[
    {
        title:"HomePage",
        path:"/",
    },
    {
        title:"About",
        path:"/about",
    },
    {
        title:"Contact",
        path:"/contact",
    },
    {
        title:"Blog",
        path:"/blog",
    },
    {
        title:"Login",
        path:"/login",
    },
];
const Links=()=>{
//make navbar responsive 
    const [open,setOpen]= useState(false)

    
//TEMPORARY
const session =true
const isAdmin = true
//if say session = flase it do not show logout.
    return(
        <div className={style.container}>
            <div className={style.links}>
                {links.map((link=>(
                    // <Link href={link.path} key={link.title}>{link.title}</Link>
                    <NavLink item={link} key={link.title}/>
                    )))}{
                        session ? (
                            <>
                        {isAdmin && <NavLink item={{title:"Admin", path:"/admin"}}/>}
                        <button className={style.logout}>Logout</button>
                        </>
                    ):(
                        <NavLink item={{title: "Login", path:"/login"}}/>
                        )
                    }
            </div>
            <Image className={style.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={()=> setOpen((prev)=>!prev)}/>
            {
                open && <div className={style.mobileLinks}>
                    {links.map((link)=>(
                        <NavLink item={link} key={link.title}/>
                    ))}

                </div>
            }
        </div>
        
    )
}

export default Links;