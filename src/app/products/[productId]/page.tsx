import { Metadata } from "next";
import { notFound } from "next/navigation"

type Props={
    params:{
        productId:string;
    }
}

//dynamic metadata
export const generateMetadata=({params}:Props):Metadata =>{
    return{
        title:`Product ${params.productId}`
    }
}

export default function ProductsId({params}:Props){
    if(parseInt(params.productId) > 1000){
        notFound()
    }
    return <h1>Product details {params.productId}</h1>
}