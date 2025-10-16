"use client";
import React from "react";
import Image from "next/image";

export default function Comments() {
  const comments = [
    {
      name: "Student Name Gose Here",
      imgurl: "/images/avatar1.webp", 
      date: "Oct 10,2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    },
    {
      name: "Student Name Gose Here",
      imgurl: "/images/avatar2.webp", 
      date: "Oct 15,2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    },
    {
      name: "Student Name Gose Here",
      imgurl: "/images/avatar3.webp", 
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
                width={85}
                height={85}
                className="h-[85px] w-[85px] rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-[1.25rem] mb-3 text-gray-600">
                  {item.name}
                </h3>
                <p className=" text-[1rem] text-gray-600">{item.date}</p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {item.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}