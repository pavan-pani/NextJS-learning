import Link from "next/link";

export default function Products(){
    const id=100
    return(
        <>
            <h1>Products page</h1>
            <h3><Link href="products/1">product 1</Link></h3>
            <h3><Link href="products/2">product 2</Link></h3>
            <h3><Link href="products/3" replace>product 3</Link></h3>
            <h3><Link href={`products/${id}`}>product 100</Link></h3>
        </>
    ) 
}