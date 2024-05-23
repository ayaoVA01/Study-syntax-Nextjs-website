"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"



const NagationTestPage = ()=>{
    const router =useRouter()
    const pathName = usePathname()
    const query = useSearchParams()
    const q = query.get("q")
    console.log(q)
    // console.log(pathName)
    
    const handleClick =()=>{
        console.log("clicked")
        router.replace("/") // push(), replacce(), back(), forward()
    }
    return(
        <div>
            <Link href="/" prefetch={false}>click here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}

export default NagationTestPage