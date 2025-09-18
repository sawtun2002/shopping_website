import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="border-b border-gray-500 ">
    //   <div className="container mx-auto flex justify-between items-center py-4">
    //     <Link to="/">Home</Link>
    //   </div>
    // </nav>
    <nav className="sticky top-0 bg-white shadow-md z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-gray-700">
          ShopLight
        </Link>
        <Link
          to="/cart"
          className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          🛒
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
