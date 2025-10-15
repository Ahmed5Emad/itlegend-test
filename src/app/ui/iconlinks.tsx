import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function IconLinks() {
  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://facebook.com"

    },
    {
      icon: FaInstagram,
      href: "https://instagram.com"

    },
    {
      icon: FaTwitter,
      href: "https://twitter.com"

    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com"
    },
  ];

  return (
    <div className="flex items-center space-x-5">
      {socialLinks.map(({ icon: Icon, href }) => (
        <div key={href} className="fleex items-center rounded-full shadow p-2 hover:bg-gray-200  text-gray-400 hover:text-white">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-3xl transition-colors duration-200 `}
        >
          <Icon />
        </a>
        </div>
      ))}
    </div>
  );
}
