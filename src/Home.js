import React,{useState} from 'react';

const Home = ({number, setNumber}) => {
 


    return(
        <>
            <div>{number}</div>
            <div>Home</div>
            <select id="selects" onChange = {() =>{
                var select = document.getElementById('selects');

                setNumber(select.value)
            }    }>
                {[1,2,3,4,5,6,7,8,9,10].map((e)=><option value={e}>{e}</option>)}

            </select>
            
        
        </>
    )
}

export default Home;