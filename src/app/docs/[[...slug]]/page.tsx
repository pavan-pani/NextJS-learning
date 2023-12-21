type Props={
    params:{
        slug:string[];
    }
}

export default function docs({params}:Props){
    if(params.slug?.length==2)
    {
        return <h1>viewing docs for feature {params.slug[0]} concept {params.slug[1]}</h1>
    }
    else if(params.slug?.length==1){
        return <h1> viweing docs from feature {params.slug[0]}</h1>
    }
    return <h1>docs page</h1>
}