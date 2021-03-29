import React, { useState, useEffect } from 'react'

export default function CheckBox() {
    const [checkbox, setCheckbox] = useState(
        [{ name: "one", check: false },
        { name: "two", check: false },
        { name: "three", check: false },
        { name: "four", check: false },
        { name: "five", check: false }])
    const [isChecked, setIsCheckd] = useState([
        { name: "one", check: false },
        { name: "two", check: false },
        { name: "three", check: false },
        { name: "four", check: false },
        { name: "five", check: false }
    ])
    const [checked, setChecked] = useState([])
    const handleChange = (index) => {
        const newData = [...isChecked]
        newData[index].check = !newData[index].check
        setChecked(newData.filter(box => box.check === false));
    }
    const handleDel = () => {
        const newData = [...checked]
        setIsCheckd(newData)
    }
    const handleReset = () => {
        setIsCheckd(checkbox)
    }
    useEffect(() => {
        console.log(checked);
    });

    return (
        <div style={{ margin: "5rem 45%" }}>
            <button onClick={handleDel} style={{ fontSize: "2rem" }}>delete</button>
            <button onClick={handleReset} style={{ fontSize: "2rem" }}>reset</button>
            {isChecked.map((box, index) => {
                return (
                    <div key={index} style={{ fontSize: "3rem" }}  >
                        <input
                            style={{ width: 40, height: 30 }}
                            type="checkbox" name={box.name}
                            checked={box.check}
                            onChange={() => handleChange(index)}
                        />
                        <label >{box.name}</label>
                    </div>
                )
            })}
        </div>
    )
}
