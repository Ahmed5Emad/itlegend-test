import { FaListUl, FaRegCommentDots, FaRegCheckCircle, FaRegQuestionCircle } from "react-icons/fa";

export default function IconLinks() {
  const customIcons = [
    {
      icon: FaListUl,
      href: "#list"
    },
    {
      icon: FaRegCommentDots,
      href: "#comments"
    },
    {
      icon: FaRegCheckCircle,
      href: "#status" // Make sure you have a <div id="status">...</div>
    },
    {
      icon: FaRegQuestionCircle,
      href: "#help" // Make sure you have a <div id="help">...</div>
    },
  ];

  return (
    <div className="flex items-center space-x-5">
      {customIcons.map(({ icon: Icon, href }) => (
        // Corrected "fleex" to "flex"
        <div key={href} className="flex items-center rounded-full mt-[40px] mb-[60px] ring-1 ring-gray-200 p-2 hover:bg-gray-200  text-gray-400 hover:text-white">
        <a
          href={href}
          className={`text-[20px] transition-colors duration-200 `}
        >
          <Icon />
        </a>
        </div>
      ))}
    </div>
  );
}