import { notFound } from "next/navigation"

export default function ProductsId({params}:{
    params:{productId:string}
}){
    if(parseInt(params.productId) > 1000){
        notFound()
    }
    return <h1>Product details {params.productId}</h1>
}