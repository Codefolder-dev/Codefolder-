// app/languages/[language]/questions/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import QuestionList from '@/components/QuestionList';
import Filter from '@/components/Filter';

type Question = {
  id: number;
  question: string;
  answer: string;
  level: string;
};

const LanguageQuestionsPage = () => {
  const params = useParams();
  const language = params.language as string;
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/data/${language}-questions.json`);
        if (!response.ok) throw new Error('Failed to load questions');
        const data = await response.json();
        setQuestions(data);
        setFilteredQuestions(data); // Initialize with all questions
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, [language]);

  useEffect(() => {
    if (selectedLevel) {
      setFilteredQuestions(
        questions.filter((question) => question.level === selectedLevel)
      );
    } else {
      setFilteredQuestions(questions);
    }
  }, [selectedLevel, questions]);

  const handleQuestionClick = (questionId: number) => {
    router.push(`/Dashboard/languages/${language}/questions/${questionId}`);
  };

  return (
    <div style={{ padding: '20px' }} className='w-full'>
      <h2>{language} Interview Questions</h2>
      <Filter selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />
      <QuestionList questions={filteredQuestions} onQuestionClick={handleQuestionClick} />
    </div>
  );
};

export default LanguageQuestionsPage;
