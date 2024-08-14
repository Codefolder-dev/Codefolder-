// components/QuestionCard.tsx
import React from 'react';

type QuestionCardProps = {
  question: string;
  answer: string;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answer }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3>Q: {question}</h3>
      <p>A: {answer}</p>
    </div>
  );
};

export default QuestionCard;
