import React, { useState, useEffect, useRef } from 'react'

export default function Video() {
    const videoRef = useRef(null)

    const playVideo = () => {
        videoRef.current.play()
    }
    const pauseVideo = () => {
        videoRef.current.pause()
    }
    return (
        <div>
            <video
                ref={videoRef}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                type="video.mp4"
            />
            <div>
                <button onClick={playVideo}>PLAY</button>
                <button onClick={pauseVideo}>Pause</button>
            </div>
        </div>
    )
}
