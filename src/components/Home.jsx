import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Home() {
  const storageKey = "cartList";

  const [isOrder, setIsOrder] = useState([]);

  const fetchIds = async () => {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) throw new Error("Error fectchin data");
    return res.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchIds,
    staleTime: 5000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occured: {error.message}</p>;

  // useEffect(() => {
  //   async function fetchIds() {
  //     const res = await fetch("https://dummyjson.com/products");
  //     const data = await res.json();
  //     setIsData(data.products); // store products array in state
  //     console.log(data.products); // log fetched products directly
  //   }
  //   fetchIds();
  // }, []);

  const addToCart = (e, id) => {
    e.preventDefault();

    setIsOrder(isOrder + 1);

    // Get current cart from localStorage
    const cart = JSON.parse(localStorage.getItem(storageKey)) || []; // ensure array

    // Find product by id inside localStorage cart array
    const itemInCart = cart.find((product) => product.id === id);

    console.log(itemInCart); // this is the product from localStorage with that id
  };

  return (
    <main className="py-12 static">
      <Link to="/cart" className="">
        <div className="md:ml-350 ml-100 border border-2 text-center w-20 h-20 rounded-full pt-6 sticky top-5">
          Cart
        </div>
      </Link>

      <div className="conatiner flex justify-center ">
        <ul className="grid grid-cols-3 gap-3 max-w-3xl box-border">
          {data.products.map((datas) => (
            <li
              key={datas.id}
              className="border border-2 text-center rounded-2xl py-10 max-h-90 truncate transition-all duration-1000"
            >
              <div className="border-b text-center ">
                <img src={datas.images[0]} alt="" width={200} height={30} />
              </div>

              <span className="">{datas.title}</span>
              <p>{datas.price}$</p>
              <button
                className="border border-1 mt-8 rounded-lg px-2 hover:bg-blue-200 bg-blue-50 transition duration-300 md:bg-amber-100"
                onClick={(e) => {
                  addToCart(e, datas.id);
                }}
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
        {/* <ul className="grid grid-cols-3">
          {isData.map((data) => (
            <li key={data.id}>
              <img src={data.images} alt="" width={200} height={30} />
              {data.title}
            </li>
          ))}
        </ul> */}
      </div>
      <button></button>
    </main>
  );
}
