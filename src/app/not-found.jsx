import Link from "next/link";

const NotFound=()=>{
    return(
        <div>
            
            <h2>Not Found</h2>
            <p>Sorry, the page are looking for doesn't exist.</p>
            <Link href="/"> Return Home page</Link>
        </div>
    )
}

export default NotFound;