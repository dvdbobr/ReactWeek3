import React, { useState, useRef } from 'react'
import ImgItem from './ImgItem'
export default function ImgColor() {


    return (

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <ImgItem
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <ImgItem
            src="https://images.pexels.com/photos/3692550/pexels-photo-3692550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
        </div>
    )
}
