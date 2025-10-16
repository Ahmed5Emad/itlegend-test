"use client";
import React from "react";
import {
  FiClock,
  FiBookOpen,
  FiUsers,
  FiGlobe,
  FiList,
  FiDollarSign,
  FiUser,
  FiAward,
} from "react-icons/fi";


interface CourseDetails {
  duration: string;
  lessons: number;
  enrolled: string;
  language: string;
  topics: number;
  price: string;
  instructor: string;
  certificate: string;
}


interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const CourseMaterial: React.FC = () => {
  const courseDetails: CourseDetails = {
    duration: "3 weeks",
    lessons: 8,
    enrolled: "65 students",
    language: "English",
    topics: 36,
    price: "80$",
    instructor: "Alex Snow",
    certificate: "Included",
  };

  return (
    <div className="w-full max-w-4xl rounded-s-sm bg-white pt-[38px] pb-[18px] pl-6 pr-5 shadow-(--my-shadow)">
      <div className="flex w-full flex-col lg:flex-row lg:gap-[16%] text-gray-600 text-[20px]">
        <div className="flex flex-1  flex-col px-3 gap-y-6">
          <DetailItem
            icon={<FiClock className="" />}
            label="Duration :"
            value={courseDetails.duration}
          />
          <DetailItem
            icon={<FiBookOpen className="" />}
            label="Lessons :"
            value={courseDetails.lessons}
          />
          <DetailItem
            icon={<FiUsers className="" />}
            label="Enrolled :"
            value={courseDetails.enrolled}
          />
          <DetailItem
            icon={<FiGlobe className="" />}
            label="Language :"
            value={courseDetails.language}
          />
        </div>

        <div className="flex flex-1 flex-col px-3 gap-y-6">
          <DetailItem
            icon={<FiList className="" />}
            label="Topics :"
            value={courseDetails.topics}
          />
          <DetailItem
            icon={<FiDollarSign className="" />}
            label="Price :"
            value={courseDetails.price}
          />
          <DetailItem
            icon={<FiUser className="" />}
            label="Instructor :"
            value={courseDetails.instructor}
          />
          <DetailItem
            icon={<FiAward className="" />}
            label="Certificate :"
            value={courseDetails.certificate}
          />
        </div>
      </div>
    </div>
  );
};


const DetailItem: React.FC<DetailItemProps> = ({ icon, label, value }) => (
  <div className="border-b border-gray-200 pb-4 last:border-b-0">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        {icon}
        <span className="font-medium text-gray-600">{label}</span>
      </div>
      <span className="font-medium text-gray-600">{value}</span>
    </div>
  </div>
);

export default CourseMaterial;