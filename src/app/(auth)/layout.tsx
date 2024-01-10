'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"
import { useState } from "react";

const nanLink=[
    {name:'sign up', href:'/sign-up'},
    {name:'login', href:'/login'},
    {name:'logout', href:'/logout'}
]

export default function AuthLayout({children}:{children:React.ReactNode}){
    const pathaName=usePathname()
    const [input, setInput]=useState('')
    console.log("patha name", pathaName);
    
    return(
        <>
        <div>
            <input value={input} onChange={e=>setInput(e.target.value)}></input>
        </div>
            {nanLink.map((link)=>{
                const isActive=pathaName.startsWith(link.href)
                return(
                    <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </>
    )
}