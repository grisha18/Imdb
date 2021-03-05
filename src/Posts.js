import React,{useState, useEffect} from 'react';


const Elem = ({e}) =>{
    return(
        <>

        <div>{e.body}</div>
        <hr/>
    </>
    )

}



const Posts = (userId) =>{
const [data, setData] = useState(null);

useEffect(async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    setData(posts);

}, [])

return(
    data ?
    <div>{data.map((e,i)=><Elem e={e} />)}</div>
    :
    <button onClick={()=>setData(200)}>Press me</button>
)

}


export default Posts;