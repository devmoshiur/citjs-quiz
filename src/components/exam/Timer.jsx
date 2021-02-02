import React from 'react'

function Timer() {
    let duration = 120;
    setInterval(()=>{
        duration = duration-1;
    },1000);
    return (
        <span>{duration}</span>
    )
}

export default Timer
