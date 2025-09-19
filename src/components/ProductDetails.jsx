import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

export default function ProductDetails() {
  const { id } = useParams();
  const storageKey = "cartList";

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Error fetching product");
    return res.json();
  };

  const { data: product, error, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchProduct,
    staleTime: 5000,
  });

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem(storageKey)) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem(storageKey, JSON.stringify(cart));
    alert("Added to cart!");
  };

  if (isLoading)
    return (
      <p className="text-center py-10">
        Loading... <Spinner />
      </p>
    );
  if (error)
    return (
      <p className="text-center py-10 text-red-500">{error.message}</p>
    );

  return (
    <main className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-96 object-cover rounded-2xl shadow-md"
            />
            <div className="flex gap-3 mt-4">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  className="w-20 h-20 object-cover rounded-lg border hover:scale-105 transition"
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800  mb-3">
              {product.title}
            </h1>
            <p className="text-gray-500  mb-4">
              {product.description}
            </p>
            <p className="text-2xl font-semibold text-gray-800  mb-2">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500  mb-6">
              Stock: {product.stock}
            </p>

            <button
              onClick={addToCart}
              className="px-5 py-3 rounded-lg bg-gray-100  text-gray-800  hover:bg-gray-200  transition font-semibold"
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
