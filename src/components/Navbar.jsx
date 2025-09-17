import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-500 ">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
