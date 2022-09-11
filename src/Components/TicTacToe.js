import React, {useEffect, useState} from "react";
import "./TicTacToe.css";

const Square = ({pressed, onClick}) => {

    return (
        <div onClick={onClick} className="square">
            {pressed}
        </div>
    )
}



const Tic = () =>{

    const [currentGameState, setCurrentGameState] = useState(0);
    const [currentBoardState, setCurrentBoardState] = useState(Array(9).fill(""));


    useEffect(()=>{


        console.log(currentBoardState[6], currentBoardState[7], currentBoardState[8]);
        // массив индексов выигрышных состояний и функцию проверки
        // [0,1,2] [0,3,6] [6,7,8]
        
        if(currentBoardState[0] && currentBoardState[0] === currentBoardState[1] && 
            currentBoardState[1]  === currentBoardState[2])alert(1);
    
        if(currentBoardState[0] && currentBoardState[0] === currentBoardState[3] &&
            currentBoardState[3] === currentBoardState[6]
            )alert(2);
        if(currentBoardState[6] && currentBoardState[6] === currentBoardState[7] &&
            currentBoardState[7] === currentBoardState[8]
            )alert(3);    
        
        
        

    }, [currentBoardState])

    const pressHandler = (indexClicked) => () => {
        if(currentBoardState[indexClicked]){
           return; 
        }
        const whatToSet = currentGameState % 2 ? '0' : 'X';

        setCurrentGameState(currentGameState+1)
        setCurrentBoardState(currentBoardState.map( (e,i)=> i===indexClicked ? whatToSet : e ));
    }


    return(
        <>
            <div className="board">
            {currentBoardState.map( (e,i)=>{
                return <Square onClick={pressHandler(i)} pressed={e} key={i}/>
            })}
            </div>
        </>
    )
}

export default Tic;