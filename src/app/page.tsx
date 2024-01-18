import Link from "next/link";

export default function Home(){
    return(
        <div>
            <h1>Well come to app route, Pavan</h1>
            <Link href="/blog">Blog  </Link>
            <Link href="/docs">Docs  </Link>
            <Link href="/profile">Profile  </Link>
            <Link href="/products">Products  </Link>
        </div>
    ) 
}