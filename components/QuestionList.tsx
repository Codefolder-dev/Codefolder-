// components/QuestionList.tsx
import React from 'react';
import Accordion from './Accordion';

type Question = {
  id: number;
  question: string;
  answer: string;
};

type QuestionListProps = {
  questions: Question[];
  onQuestionClick: (questionId: number) => void;
};

const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  onQuestionClick,
}) => {
  return (
    <div className='bg-slate-900'>
      {questions.map((q) => (
        <Accordion
          key={q.id}
          title={q.question}
          content={q.answer}
          onReadMore={() => onQuestionClick(q.id)}
        />
      ))}
    </div>
  );
};

export default QuestionList;
