import React, { useState } from 'react';
import Accordion from './Accordion';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

type Question = {
  id: number;
  question: string;
  answer: string;
};

type QuestionListProps = {
  questions: Question[];
  onQuestionClick: (questionId: number) => void;
  language: string;
};

const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  onQuestionClick,
  language,
}) => {
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const [showCustomization, setShowCustomization] = useState<boolean>(false);
  const [pdfOptions, setPdfOptions] = useState({
    margin: 20,
    lineSpacing: 10,
    fontSizeQuestion: 12,
    fontSizeAnswer: 10,
  });

  const toggleSelectQuestion = (id: number) => {
    setSelectedQuestions((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((qid) => qid !== id)
        : [...prevSelected, id]
    );
  };

  const exportSelectedQuestionsAsPDF = () => {
    const doc = new jsPDF();
    const { margin, lineSpacing, fontSizeQuestion, fontSizeAnswer } = pdfOptions;
    const pageWidth = doc.internal.pageSize.width;
    const textWidth = pageWidth - 2 * margin;

    const selected = questions.filter((q) =>
      selectedQuestions.includes(q.id)
    );

    if (selected.length === 0) {
      alert('No questions selected for export.');
      return;
    }

    selected.forEach((q, index) => {
      const yPosition = 20 + index * (lineSpacing + 50); // Adjust spacing for clarity

      doc.setFontSize(fontSizeQuestion);
      doc.text(`Q: ${q.question}`, margin, yPosition);

      doc.setFontSize(fontSizeAnswer);
      doc.text(
        doc.splitTextToSize(`A: ${q.answer}`, textWidth), // Split long text
        margin,
        yPosition + 10 // Adjust position for answer
      );

      const url = `https://codefolder.in/Dashboard/languages/${language}/questions/${q.id}`;
      doc.text(`Read More: ${url}`, margin, yPosition + 40);

      if (index < selected.length - 1) {
        doc.line(margin, yPosition + 45, pageWidth - margin, yPosition + 45);
      }
    });

    doc.save('selected-questions.pdf');
  };

  return (
    <div>
      <button
        onClick={() => setShowCustomization(true) }
        className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'
      >
        Customize and Export as PDF
      </button>

      {showCustomization && (
        <div className='flex flex-col w-fit p-5 gap-2 rounded-xl absolute bg-zinc-900 border border-gray-400/20'>
          <h3>Customize PDF Export</h3>
          <label>
            Margin:
            <input
              type='number'
              value={pdfOptions.margin}
              onChange={(e) => setPdfOptions({ ...pdfOptions, margin: parseInt(e.target.value) })}
                            className='bg-zinc-900 border border-gray-400/30 rounded-lg w-32 px-2'

            />
          </label>
          <label>
            Line Spacing:
            <input
              type='number'
              value={pdfOptions.lineSpacing}
              onChange={(e) => setPdfOptions({ ...pdfOptions, lineSpacing: parseInt(e.target.value) })}
              className='bg-zinc-900 border border-gray-400/30 rounded-lg w-32 px-2'
            />
          </label>
          <label>
            Font Size for Questions:
            <input
              type='number'
              value={pdfOptions.fontSizeQuestion}
              onChange={(e) => setPdfOptions({ ...pdfOptions, fontSizeQuestion: parseInt(e.target.value) })}
                            className='bg-zinc-900 border border-gray-400/30 rounded-lg w-32 px-2'

            />
          </label>
          <label>
            Font Size for Answers:
            <input
              type='number'
              value={pdfOptions.fontSizeAnswer}
              onChange={(e) => setPdfOptions({ ...pdfOptions, fontSizeAnswer: parseInt(e.target.value) })}
                            className='bg-zinc-900 border border-gray-400/30 rounded-lg w-32 px-2'

            />
          </label>
          <div className='flex justify-between'>

          <button onClick={() => exportSelectedQuestionsAsPDF()} className='bg-blue-600/80 px-3 py-1 rounded-lg'>Export</button>
          <button onClick={() => setShowCustomization(false)} className='bg-blue-600/80 px-3 py-1 rounded-lg'>Cancel</button>
          </div>
        </div>
      )}

      {questions.map((q) => (
        <div key={q.id}>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={selectedQuestions.includes(q.id)}
              onChange={() => toggleSelectQuestion(q.id)}
              className='mr-2'
            />
            <Accordion
              title={q.question}
              content={q.answer}
              onReadMore={() => onQuestionClick(q.id)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
