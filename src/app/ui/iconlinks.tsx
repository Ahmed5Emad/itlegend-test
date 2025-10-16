"use client";
import { FaListUl, FaRegCommentDots, FaRegQuestionCircle } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import QuestionPopup from './questionpopup';
import PopupLeaderboard from './popupleaderboard';
import { useState } from "react";

export default function IconLinks() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isLeaderboardOpen, setLeaderboardOpen] = useState(false);

  const customIcons = [
    { key: 'list', icon: FaListUl, href: "#list", isPopup: false },
    { key: 'comments', icon: FaRegCommentDots, href: "#comments", isPopup: false },
    { key: 'leaderboard', icon: MdLeaderboard, isLeaderboardPopup: true },
    { key: 'question', icon: FaRegQuestionCircle, isPopup: true },
  ];

  return (
    <>
      <div className="flex items-center space-x-5">
        {customIcons.map(({ key, icon: Icon, href, isPopup, isLeaderboardPopup }) => (
          <div key={key} className="flex items-center rounded-full mt-[40px] mb-[60px] ring-1 ring-gray-200 p-2 hover:bg-gray-200  text-gray-400 hover:text-white">
            {isPopup ? (
              <button onClick={() => setPopupOpen(true)} className={`text-[20px] transition-colors duration-200 `}>
                <Icon />
              </button>
            ) : isLeaderboardPopup ? (
              <button onClick={() => setLeaderboardOpen(true)} className={`text-[20px] transition-colors duration-200 `}>
                <Icon />
              </button>
            ) : (
              <a href={href} className={`text-[20px] transition-colors duration-200 `}>
                <Icon />
              </a>
            )}
          </div>
        ))}
      </div>
      <QuestionPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
      <PopupLeaderboard isOpen={isLeaderboardOpen} onClose={() => setLeaderboardOpen(false)} />
    </>
  );
}