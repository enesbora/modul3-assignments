import React from 'react';
import "./Result.css";

const Result = ({score, back}) => {
    return<div className="result">
<div className="punkt">Skorunuz:{score}</div>
<button onClick={back}>Geri</button>
    </div>          
};

export default Result;