// import React from "react";
// import { Link } from "react-router";

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200">
//       <div className="max-w-6xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">
//               ShopLight
//             </h3>
//             <p className="text-sm text-gray-500">
//               A modern shopping experience built with React & Tailwind CSS.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold text-gray-700 mb-3">
//               Quick Links
//             </h4>
//             <ul className="space-y-2 text-sm text-gray-500">
//               <li>
//                 <Link to="/" className="hover:text-gray-700">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/cart" className="hover:text-gray-700">
//                   Cart
//                 </Link>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-700">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold text-gray-700 mb-3">
//               Follow Us
//             </h4>
//             <div className="flex space-x-3">
//               <a
//                 href="#"
//                 className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
//               >
//                 🌐
//               </a>
//               <a
//                 href="#"
//                 className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
//               >
//                 🐦
//               </a>
//               <a
//                 href="#"
//                 className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
//               >
//                 📸
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-400">
//           © {new Date().getFullYear()} ShopLight. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }



import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-3">
              ShopLight
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Shop with us, feel better experiences ❤️
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Cart
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-3">
              Follow Us
            </h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} ShopLight. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
