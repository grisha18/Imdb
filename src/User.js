import React, {useState, useEffect} from 'react';

const Elem = ({e})=>{

    return (
        <>
            <div >{e.title} <br/> {e.completed ? <span> 	
            &#10003;</span> : <></>} 
            </div> <hr/>
        </>
    )


}



const User = (userid) => {

    const [data, setData] = useState(null);
    useEffect(async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        let todos = await response.json();
        setData(todos);

    }, [])

    console.log(typeof setData);

    return(
        data ?
        <div>{data.map((e,i)=><Elem e={e} />)}</div>
        :
        <button onClick={()=>setData(200)}>Press me</button>
    )

}



export default User;