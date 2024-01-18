"use client"
import { useRouter } from "next/navigation";

function OrderProduct() {
    const route=useRouter()

    const handleClick=()=>{
        console.log("place a order..!");
        route.push('/')
        
    }
    return(
        <>
            <h3>Order Product</h3>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}

export default OrderProduct