import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time, SetTime] = useState(0);
    const [run, SetRun] = useState(false);

    useEffect(()=>{
        let initial ;
        if(run) {
            initial = setInterval(()=> SetTime(time+1), 1000);
        }
        return () => clearInterval(initial);
    }, [run, time])

    const setRunStop = () => {
        SetRun(!run);
    }

  return (
    <div>
        <p>{time}</p>
        <button onClick={setRunStop}>{run ? "Stop": "Start"}</button>
        <button onClick={()=>SetTime(0)}>Reset</button>
    </div>
  )
}

export default Stopwatch
