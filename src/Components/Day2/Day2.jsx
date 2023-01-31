import React, { useRef } from "react";
import "./Day2.scss";

export default function Day2() {

    const iconContainerRef = useRef();
    const topBarRef = useRef();
    const middleBarRef = useRef();
    const bottomBarRef = useRef();

    const toggleButton = () => {
        iconContainerRef.current.classList.toggle("active");
        topBarRef.current.classList.remove("no-animation");
        middleBarRef.current.classList.remove("no-animation");
        bottomBarRef.current.classList.remove("no-animation");
    }
    return (
        <div className="container-day2">
            <div className="widget-day2">
                <div className="icon-container" ref={iconContainerRef} onClick={() => toggleButton()}>
                    <div className="top-bar no-animation" ref={topBarRef}></div>
                    <div className="middle-bar no-animation" ref={middleBarRef}></div>
                    <div className="bottom-bar no-animation" ref={bottomBarRef}></div>
                </div>
            </div>
        </div>
    )
}