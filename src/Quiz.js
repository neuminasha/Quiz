import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'Which of the following elements is used to create a drop-down list in HTML?',
      options: ['<input>', '<select>', ' <list>', ' <dropdown>'],
      answer: '<select>',
    },
    {
      question: 'Which HTML element is used to embed a video in a webpage?',
      options: ['<video>', '<media>', ' <embed>', '<source>'],
      answer: '<video>',
    },
    {
        question:'How do you select all p elements inside a div element?',
        options: ['div + p', 'div.p', 'div p', ' p div'],
        answer: 'div p',
      },
      {
        question:'How do you center a block element in CSS?',
        options: ['text-align: center;', 'margin: 0 auto;', 'float: center;', 'align-content: center'],
        answer: 'margin: 0 auto;',
      },
      {
        question:'How do you add a comment in JavaScript?',
        options: [' <!-- This is a comment -->', ' // This is a comment', '/* This is a comment */', 'Both b and c'],
        answer: '',
      },
      {
        question:'Which event occurs when the user clicks on an HTML element?',
        options: ['onchange', 'onclick', 'onmouseover', 'onmouseclick'],
        answer: 'onclick',
      },
      {
        question:'How do you declare a JavaScript variable?',
        options: ['var carName;', 'variable carName;', 'v carName;', 'carName;'],
        answer: 'var carName;',
      },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;