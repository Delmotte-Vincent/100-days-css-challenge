import { FunctionComponent } from 'react';
import './Day1.scss';

export const Day1: FunctionComponent = () => (
    <div className="container-day1">
        <div className="widget">
            <div className="number-container">
                <div className="one-one"></div>
                <div className="one-two"></div>
                <div className="zero-one"></div>
                <div className="zero-two"></div>
            </div>
            <p className="days">Days</p>
            <p className="css-challenge">Css Challenge</p>
        </div>
    </div>
);
