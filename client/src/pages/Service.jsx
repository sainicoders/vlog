import { useEffect, useState } from "react"

export const Service=()=>{

    const [data,setData]=useState(0);

    useEffect=(()=>{
        document.title=data;
    },[data]);

    return(
        
        <>
        <div>
            <button onClick={()=>setData(data+1)}>+</button>
            <h1>{data}</h1>
            <button  onClick={()=>(data==0 ? setData(0):setData(data-1))}>-</button>
        </div>
        </>
    );
};