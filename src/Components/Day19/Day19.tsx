import { FunctionComponent } from 'react';
import './Day19.scss';

export const Day19: FunctionComponent = () => (
  <div className="container-day19">
    <div className="widget-day19">
      <input id="radio-1" type="radio" name="dots" />
      <label htmlFor="radio-1" className="circle" />
      <input id="radio-2" type="radio" name="dots" />
      <label htmlFor="radio-2" className="circle" />
      <input id="radio-3" type="radio" name="dots" />
      <label htmlFor="radio-3" className="circle" />
      <div className="background">
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#D95F02',
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#1B9E77',
            top: 0,
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#7570B3',
            top: 0,
          }}
        />
      </div>
      <div className="dot" />
    </div>
  </div>
);
