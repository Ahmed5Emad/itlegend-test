"use client";
import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"; // Using react-icons for the arrow

export default function Comments() {
  const comments = [
    {
      name: "Student Name Gose Here",
      imgurl: "https://placehold.co/100x100/EFEFEF/333?text=SN&font=sans-serif", // Placeholder avatar
      date: "Oct 10,2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    },
    {
      name: "Student Name Gose Here",
      imgurl: "https://placehold.co/100x100/EFEFEF/333?text=SN&font=sans-serif", // Placeholder avatar
      date: "Oct 15,2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    },
    {
      name: "Student Name Gose Here",
      imgurl: "https://placehold.co/100x100/EFEFEF/333?text=SN&font=sans-serif", // Placeholder avatar
      date: "Oct 19,2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    },
  ];

  return (
    <div className="w-full  ">
      <div className="space-y-8">
        {comments.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-8 last:border-b-0"
          >
            <div className="flex items-start gap-x-5">
              <Image
                src={item.imgurl}
                alt={`Avatar of ${item.name}`}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.date}</p>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {item.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Submission Form */}
      <div className="mt-12">
        <div className="space-y-4">
          <textarea
            rows={5}
            placeholder="Write a comment"
            className="w-full resize-none rounded-md border shadow-(--my-shadow) border-gray-200 bg-white p-4 text-gray-700 placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          ></textarea>
          <button className="inline-flex items-center gap-x-2 rounded-md bg-[#45B39D] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#3a9a86] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
            Submit Review
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}