'use client';

import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface QuestionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuestionPopup({ isOpen, onClose }: QuestionPopupProps) {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const savedQuestion = sessionStorage.getItem('user_question');
    if (savedQuestion) {
      setQuestion(savedQuestion);
    }
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setQuestion(text);
    sessionStorage.setItem('user_question', text);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          <FiX size={24} />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Ask a Question</h2>
        <textarea
          rows={8}
          placeholder="Write your question here..."
          className="w-full resize-none rounded-md border border-gray-200 bg-white p-4 text-gray-600 placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          value={question}
          onChange={handleTextChange}
        ></textarea>
        <button className="mt-4 inline-flex items-center gap-x-2 rounded-md bg-[#45B39D] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#3a9a86] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
          Submit Question
        </button>
      </div>
    </div>
  );
}
