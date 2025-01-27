import { FunctionComponent } from 'react';
import './Day16.scss';

export const Day16: FunctionComponent = () => {
  return (
    <div className="container-day16">
      <div className="widget-day16">
        <div className="circle"></div>
        <svg height="100" width="100" className="triangle">
          <polygon points="50,0 0,100 100,100" />
        </svg>
        <svg height="100" width="100" className="octogon">
          <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
        </svg>
        <div className="octogon-spark">
          <div className="spark s1"></div>
          <div className="spark s2"></div>
          <div className="spark s3"></div>
          <div className="spark s4"></div>
        </div>
      </div>
    </div>
  );
};
