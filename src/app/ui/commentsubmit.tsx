import { FiArrowRight } from "react-icons/fi"


export default function Submit() {
    return (
        <div className="mt-12">
        <div className="space-y-4">
          <textarea
            rows={5}
            placeholder="Write a comment"
            className="w-full resize-none rounded-md border shadow-(--my-shadow) border-gray-200 bg-white p-4 text-gray-600 placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          ></textarea>
          <button className="inline-flex items-center gap-x-2 rounded-md bg-[#45B39D] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#3a9a86] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
            Submit Review
            <FiArrowRight />
          </button>
        </div>
      </div>
    )
}