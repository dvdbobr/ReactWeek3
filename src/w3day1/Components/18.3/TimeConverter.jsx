import React, { useState } from 'react'

export default function TimeConverter() {
    const [time, setTime] = useState([{
        seconds: 0,
        minutes: 0,
        hours: 0
    }])
    const changeTime = (e) => {
        console.log(e.target.name, e.target.value);
        const newTime = [...time]
        if (e.target.name === "seconds") {
            newTime[0]["seconds"] = parseInt(e.target.value)
            newTime[0]["minutes"] = (parseInt(e.target.value) / 60)
            newTime[0]["hours"] = (parseInt(e.target.value) / 360)
        }
        else if (e.target.name === "minutes") {
            newTime[0]["seconds"] = parseInt(e.target.value) * 60
            newTime[0]["minutes"] = parseInt(e.target.value)
            newTime[0]["hours"] = (parseInt(e.target.value) / 60)
        }
        else {
            newTime[0]["seconds"] = parseInt(e.target.value) * 360
            newTime[0]["minutes"] = parseInt(e.target.value) * 60
            newTime[0]["hours"] = parseInt(e.target.value)
        }
        console.log(newTime);
        setTime(newTime);
    }
    return (
        <div style={{ margin: "20% 40%" }}>
            <label>Seconds</label>
            <input type="number" name="seconds" value={time[0]["seconds"]} onChange={changeTime} /><br />
            <label>Minutes</label>
            <input type="number" name="minutes" value={time[0]["minutes"]} onChange={changeTime} /><br />
            <label>Hours</label>
            <input type="number" name="hours" value={time[0]["hours"]} onChange={changeTime} />
        </div>
    )
}
