
"use client"

import style from "./contact.module.css"
import Image from "next/image"
// import dynamic from "next/dynamic"

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"),{ssr:false})
const ContactPage = ()=>{
    const  a = Math.random();
    return(
        <div className={style.container}>
            <div className={style.imgContact}>
                <Image src="/004.png" alt="Contact Image" fill className={style.img}/>
            </div>
           
            <div className={style.formContainer}>
                {/* {HydrationTestNoSSR} */}
                <div suppressHydrationWarning>{a}</div>
                <form action="" className={style.form}>
                    
                    <input type="text" placeholder="Name & Last name.." />
                    <input type="email" placeholder="Email Adress" />
                    <input type="text" placeholder="Phone Number" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                    <button onClick={()=>console.log('clicked')}>send</button>
                </form>
            </div>

        </div>
    )
}

export default ContactPage