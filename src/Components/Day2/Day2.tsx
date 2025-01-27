import { FunctionComponent, useRef } from 'react';
import './Day2.scss';

export const Day2: FunctionComponent = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const middleBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const toggleButton = () => {
    if (iconContainerRef.current) {
      iconContainerRef.current.classList.toggle('active');
    }

    if (topBarRef.current) {
      topBarRef.current.classList.remove('no-animation');
    }

    if (middleBarRef.current) {
      middleBarRef.current.classList.remove('no-animation');
    }

    if (bottomBarRef.current) {
      bottomBarRef.current.classList.remove('no-animation');
    }
  };

  return (
    <div className="container-day2">
      <div className="widget-day2">
        <div
          className="icon-container"
          ref={iconContainerRef}
          onClick={() => toggleButton()}
        >
          <div className="top-bar no-animation" ref={topBarRef}></div>
          <div className="middle-bar no-animation" ref={middleBarRef}></div>
          <div className="bottom-bar no-animation" ref={bottomBarRef}></div>
        </div>
      </div>
    </div>
  );
};
