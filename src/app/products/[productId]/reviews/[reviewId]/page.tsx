"use client"
import { error } from "console"

function getRandomInt(count:number){
    return Math.floor(Math.random() * count)
}
export default function ReviewsId({params}:{
    params:{productId:string, reviewId:string}
}){
    const random=getRandomInt(2)
    if(random===1){
        throw new Error("error at loading")
    }
    return <h1>Produc {params.productId} Review {params.reviewId}</h1>
}