// app/languages/[language]/questions/[questionId]/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Question = {
  id: number;
  question: string;
  answer: string;
};

const QuestionDetailPage = () => {
  const params = useParams();
  const { language, questionId } = params;
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`/data/${language}-questions.json`);
        if (!response.ok) throw new Error('Failed to load questions');
        const data = await response.json();
        const foundQuestion = data.find(
          (q: Question) => q.id.toString() === questionId
        );
        setQuestion(foundQuestion || null);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestion();
  }, [language, questionId]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{question.question}</h2>
      <p>{question.answer}</p>
    </div>
  );
};

export default QuestionDetailPage;
