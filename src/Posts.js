import React,{useState, useEffect} from 'react';
import "./index.css"

const Elem = ({e}) =>{
    return(
        <>

        <div>{e.title}</div>
        <hr/>
    </>
    )

}



const Posts = ({id}) =>{
const [data, setData] = useState(null);

var mass;

useEffect( () =>{
     (async () =>{

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        setData(posts);
    

    })()


   
}, [])

return(
    data ?
    <div>{(data.filter((e,i)=>{
        if(e.userId == id){
          return(
            true 
          )
        }

    })).map(e=><Elem e={e}/>)
    
    }</div>
    :
    <button onClick={()=>setData(200)}>Press me</button>
)

}




// const massive = [1,4,2,5,2];




// const Elem = (props)=>{


//     const {e} = props;

//     return (
//         <>
//             <div className="our-list">
//                 {e}
//             </div>
//             <br/>
//             <hr/>
//         </>
//     )
// }


// const Posts = ()=>{
// //JSX

// // map forEach reduce reduceLeft filter 
//     return (
//         <div>{massive.map((e)=><Elem e={e}/>)}</div>
//     )

// }



export default Posts;