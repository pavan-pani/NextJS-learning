export default function ReviewsId({params}:{
    params:{productId:string, reviewId:string}
}){
    return <h1>Produc {params.productId} Review {params.reviewId}</h1>
}