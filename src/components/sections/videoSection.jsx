'use client'
import React, { useRef, useState } from 'react'
import ModalVideo from 'react-modal-video';

const VideoSection = ({className}) => {
    const [isOpen, setOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const videoSectionRef = useRef(null);

    const handleMouseMove = (e) => {
        if (videoSectionRef.current) {
            const rect = videoSectionRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const tooltipStyle = {
        display: isHovering ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        background: 'rgb(5 5 30 / 23%)',
        backdropFilter: 'blur(6.5px)',
        color: 'white',
        borderRadius: '60px',
        zIndex: 10,
        pointerEvents: 'none',
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)',
        width: "100px",
        height: "100px"
    };

    return (
        <>
            <a onClick={(e) => { setOpen(true), e.preventDefault() }} className="video-url popup-youtube" href="#">
                <div
                    className={`video-section ${className}`}
                    ref={videoSectionRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span id="tooltip" style={tooltipStyle}>
                        Play
                    </span>
                </div>
            </a>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="vFINPUJDkS8"
                onClose={() => setOpen(false)}
            />
        </>

    )
}

export default VideoSection