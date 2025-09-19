import { Route, Routes } from "react-router";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  return (
    <>
      {/* <button onClick={() => setIsMounted(prev => !prev)}>Toogle</button>
            {isMounted ? <Posts /> : <p>nothing here</p>}
            <PostedById id={3}/> */}
      {/* <CreatePost />
            <Posts /> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}
