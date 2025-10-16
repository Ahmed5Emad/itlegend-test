"use client";

import { FiX } from "react-icons/fi";

interface PopupLeaderboardProps {
  isOpen: boolean;
  onClose: () => void;
}
const encourage = [
  {
    encourage1:
      "عظيم يا صديقي.. أداءك في الكورس ده أفضل من ٦٠٪ من باقي الطلبة.. كمل عايز أشوف اسمك في الليدر بورد هنا ",
    emoji1: "💪",
  },
  {
    encourage2:
      "ممتاز! أنت أفضل من ٧٠٪ من الطلبة في الكورس. أنت على بعد خطوات قليلة من لوحة الشرف، واصل مجهودك!",
    emoji2: "🤓",
  },
  {
    encourage3:
      "عمل رائع! تفوقت على ٨٥٪ من زملائك في الكورس. مكانك في الصدارة ينتظرك، استمر في التقدم!",
    emoji3: "🎉",
  },
  {
    encourage4:
      "ألف مبروك! لقد وصلت إلى لوحة الشرف. أنت من أفضل الطلاب في الكورس، حافظ على مكانتك وألهم الآخرين!",
    emoji4: "🏆",
  },
];

export default function PopupLeaderboard({
  isOpen,
  onClose,
}: PopupLeaderboardProps) {
  if (!isOpen) return null;

  const students = [
    { name: 'Ahmed Ali', progress: 90, score: 95 },
    { name: 'Fatima Zahra', progress: 85, score: 92 },
    { name: 'Youssef Hassan', progress: 82, score: 88 },
    { name: 'Mariam Ibrahim', progress: 78, score: 85 },
    { name: 'Omar Sharif', progress: 75, score: 82 },
  ];

  return (
    
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
    >
      
      <div
        onClick={(e) => e.stopPropagation()}
        className=" p-1 rounded-lg shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <FiX size={24} />
        </button>
        <div className="bg-white rounded-md p-6 w-full max-w-sm">
          
          <div className="text-center mb-5">
            <p className="text-lg text-blue-800">Course Name Shown Here</p>
            <h1 className="text-2xl font-bold text-black">Leaderboard</h1>
          </div>

          
          <div className="bg-[#F5F9FA] flex-row flex items-center rounded-lg p-4 gap-x-1 text-right mb-6">
            <p className="text-gray-700 leading-relaxed">
    {encourage[2].encourage3}
            </p>
            <p className="text-6xl">{encourage[2].emoji3}</p>
          </div>

          
          <div className="space-y-3 p-4 bg-[#F5F9FA] rounded-2xl">
            {students.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-600 mr-3">{index + 1}</span>
                  <span className="text-gray-800 font-semibold">{student.name}</span>
                </div>
                <span className="text-blue-600 font-bold">{student.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}