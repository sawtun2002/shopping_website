// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     // <nav className="border-b border-gray-500 ">
//     //   <div className="container mx-auto flex justify-between items-center py-4">
//     //     <Link to="/">Home</Link>
//     //   </div>
//     // </nav>
//     <nav className="sticky top-0 bg-white shadow-md z-10">
//       <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
//         <Link to="/" className="text-2xl font-bold text-gray-700">
//           ShopLight
//         </Link>
//         <Link
//           to="/cart"
//           className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition"
//         >
//           🛒
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // apply theme to <html> on load and change
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-700 dark:text-gray-100"
        >
          ShopLight
        </Link>

        <div className="flex items-center gap-4">
          {/* Cart icon */}
          <Link
            to="/cart"
            className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            🛒
          </Link>

          {/* Dark/Light toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

