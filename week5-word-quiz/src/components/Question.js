
import React from 'react';

const Questions = ({questions}) => {

  return (
      <div className="question">
        {questions.question}
      </div> 
  )
};

export default Questions;