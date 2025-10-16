"use client";

import { FiClock, FiChevronLeft } from "react-icons/fi";
import { useState, useEffect } from "react";

interface ExamPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const questionsData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    id: 3,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O",
  },
  {
    id: 4,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "J.K. Rowling",
      "Ernest Hemingway",
      "Mark Twain",
    ],
    answer: "Harper Lee",
  },
  {
    id: 5,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"],
    answer: "Mitochondrion",
  },
];

export default function ExamPopup({ isOpen, onClose }: ExamPopupProps) {
  const [timeLeft, setTimeLeft] = useState(572);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const currentQuestionData = questionsData[currentQIndex];
  const totalQuestions = questionsData.length;

  const handleOptionClick = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === questionsData[currentQIndex].answer) {
      setScore(score + 1);
    }

    if (currentQIndex < questionsData.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  
  const CustomCheckbox = ({ selected, isSelectedOption }: { selected: boolean, isSelectedOption: boolean }) => (
    <div
      className={`w-6 h-6 rounded-[4px] border-2 flex items-center justify-center
        ${
          isSelectedOption
            ? "border-white"
            : "border-[#5468ff]" 
        }`}
    >
      {selected && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
    </div>
  );

  if (showScore) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/50  z-50 p-0 md:p-4">
        <div className="relative w-full max-w-md h-full max-h-[800px] bg-[#3448a1] flex flex-col overflow-hidden shadow-2xl md:rounded-3xl font-sans">
          <div className="flex-1 bg-[#f0f2f5] rounded-t-[35px] px-6 pt-8 pb-6 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl mb-8">Your score: {score} / {totalQuestions}</p>
            <button onClick={onClose} className="bg-[#5468ff] hover:bg-[#7e91e6] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30">
              Finish
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    
    <div className="fixed inset-0 flex justify-center items-center bg-black/50   z-50 p-0 md:p-4">
      <div className="relative w-full max-w-md h-full max-h-[800px] bg-[#3448a1] flex flex-col overflow-hidden shadow-2xl md:rounded-3xl font-sans">
        
        
        <div className="pt-8 pb-4 px-6">
          
          <div className="relative flex items-center justify-center mb-6">
            <button
              onClick={onClose}
              className="absolute left-0 text-white/80 hover:text-white transition-colors"
            >
              <FiChevronLeft size={32} />
            </button>

            
            <div className="bg-[#dec010] text-white px-5 py-1.5 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(222,192,16,0.5)] font-bold text-lg">
              <FiClock className="stroke-[2]" />
              <span>
                {`${minutes.toString().padStart(2, "0")}:${seconds
                  .toString()
                  .padStart(2, "0")}`}
              </span>
            </div>
          </div>

          
          <div className="flex justify-center gap-3 mt-8 mb-4">
            {questionsData.map((q, index) => {
              const isActive = index === currentQIndex;
              return (
                <div
                  key={q.id}
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-lg font-medium transition-colors
                    ${
                      isActive
                        ? "bg-[#eaecee] text-[#3448a1]"
                        : "bg-transparent text-white border border-[#5a6ac5]"
                    }`}
                >
                  {q.id}
                </div>
              );
            })}
          </div>
        </div>

        
        <div className="flex-1 bg-[#f0f2f5] rounded-t-[35px] px-6 pt-8 pb-6 flex flex-col overflow-y-auto">
          
          
          <div className="mb-8">
            <h2 className="text-[#333333] text-[1.1rem] font-bold leading-tight">
              <span className="mr-1">{currentQuestionData.id}.</span>
              <br />
              {currentQuestionData.question}
            </h2>
          </div>

          
          <div className="flex flex-col gap-4 flex-1">
            {currentQuestionData.options.map((option) => {
              const isSelected = selectedAnswer === option;
              return (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full flex items-stretch rounded-xl overflow-hidden text-left transition-all shadow-sm
                    ${
                      isSelected
                        ? "bg-[#5468ff] text-white"
                        : "bg-[#eaecee] text-[#444444]"
                    }`}
                >
                  
                  <div className={`w-16 flex items-center justify-center shrink-0
                     ${isSelected ? "border-r border-white/20" : "border-r border-gray-300"}`}>
                    <CustomCheckbox selected={isSelected} isSelectedOption={isSelected} />
                  </div>
                  
                  
                  <div className="flex-1 py-4 px-5 font-medium flex items-center">
                    {option}
                  </div>
                </button>
              );
            })}
          </div>

          
          
          <div className="flex justify-end mt-4">
            <button onClick={handleNext} className="bg-[#5468ff] hover:bg-[#7e91e6] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30">
              {currentQIndex < totalQuestions - 1 ? "Next Question" : "Submit"}
            </button>
          </div> 
        
        </div>
      </div>
    </div>
  );
}