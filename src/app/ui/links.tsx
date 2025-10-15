import Link from "next/link";

export default function Breadcrumbs() {
  const crumbs = [
    { href: "/home", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/coursedetails", label: "Course Details" },
  ];

  return (
    <nav aria-label="Breadcrumb ">
      <ol className="flex items-center  text-gray-700 text-[20px] space-x-2">
        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">›</span>}
            {index === crumbs.length - 1 ? (
              <span className="font-semibold text-gray-900">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:text-blue-600 transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
