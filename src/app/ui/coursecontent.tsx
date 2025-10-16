"use client";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";
import { LiaFileAlt } from "react-icons/lia";

export default function CourseTopics() {
  const courseSections = [
    {
      week: "Week 1–4",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        { title: "Introduction", locked: true },
        { title: "Course Overview", locked: true },
        {
          title: "Course Overview",
          questions: "0 QUESTION",
          duration: "10 MINUTES",
        },
        { title: "Course Exercise / Reference Files", locked: true },
        {
          title: "Code Editor Installation (Optional if you have one)",
          locked: true,
        },
        { title: "Embedding PHP in HTML", locked: true },
      ],
    },
    {
      week: "Week 5–8",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        { title: "Defining Functions", locked: true },
        { title: "Function Parameters", locked: true },
        {
          title: "Return Values From Functions",
          questions: "0 QUESTION",
          duration: "10 MINUTES",
        },
        { title: "Global Variable and Scope", locked: true },
        {
          title: "Newer Way of creating a Constant (Optional if you have one)",
          locked: true,
        },
        { title: "Constants", locked: true },
      ],
    },
    {
      week: "Week 9–12",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        { title: "Defining Functions", locked: true },
        { title: "Function Parameters", locked: true },
        {
          title: "Return Values From Functions",
          questions: "0 QUESTION",
          duration: "10 MINUTES",
        },
        { title: "Global Variable and Scope", locked: true },
        {
          title: "Newer Way of creating a Constant (Optional if you have one)",
          locked: true,
        },
        { title: "Constants", locked: true },
      ],
    },
  ];

  const [expandedSections, setExpandedSections] = useState(
    courseSections.map(() => true)
  );

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  return (
    <div className="w-full flex flex-col">
      {courseSections.map((section, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 mb-12 rounded-sm shadow-sm overflow-hidden"
        >
          <div
            className="flex justify-between items-center cursor-pointer p-5"
            onClick={() => toggleSection(index)}
          >
            <div>
              <h2 className="text-xl font-semibold pt-5 text-gray-800">
                {section.week}
              </h2>
              <p className="text-sm text-gray-500">{section.description}</p>
            </div>
            <div
              className={`text-gray-600 hover:text-gray-800 transition-transform duration-300 text-xl ${
                expandedSections[index] ? "rotate-180" : "rotate-0"
              }`}
            >
              {expandedSections[index] ? <IoRemove /> : <IoAdd />}
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedSections[index]
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-gray-200 mx-5" />

            <div className="flex flex-col gap-3 p-5">
              {section.lessons.map((lesson, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b last:border-b-0 border-gray-100 py-2 hover:bg-gray-50 rounded-lg transition"
                >
                  <div className="flex items-center gap-3">
                    <LiaFileAlt className="text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {lesson.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {lesson.questions && (
                      <span className="bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-md font-medium">
                        {lesson.questions}
                      </span>
                    )}
                    {lesson.duration && (
                      <span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md font-medium">
                        {lesson.duration}
                      </span>
                    )}
                    {lesson.locked && (
                      <FaLock className="text-gray-400 ml-1" size={13} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
