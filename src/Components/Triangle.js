import React from "react";

const Triangle = ({triangleActive, rotationAngle, opacity}) => {

    console.log("Triangle() rotationAngle is ", rotationAngle);

    const triangle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.1s',
        transformOrigin: 'center',
        transformStyle: 'preserve-3d',
    }
    const triangleReverse = {
        perspevyive: '100px',
        transform: 'rotateZ(' + (rotationAngle ?? 180) + 'deg)',
    }

    const triangleImg = {
        filter: "opacity(100%)",
        width: "0.7em",
        height: "0.7em",       
    }

    console.log("Triangle() triangleReverse rotate is ", triangleReverse.transform);

    const result =  triangleActive ? triangleReverse : {};

    return(
        <div style={{...triangle, ...result }} >
            <img style={{...triangleImg}} src={`${process.env.PUBLIC_URL}/triangle.png`} />
        </div>
    )
    
}

export default Triangle;

