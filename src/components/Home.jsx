// import { useQuery } from "@tanstack/react-query";

// import { Link } from "react-router-dom";

// export default function Home() {
//   const storageKey = "cartList";

//   const fetchIds = async () => {
//     const res = await fetch("https://dummyjson.com/products");

//     if (!res.ok) throw new Error("Error fectchin data");
//     return res.json();
//   };

//   const { data, error, isLoading } = useQuery({
//     queryKey: ["products"],
//     queryFn: fetchIds,
//     staleTime: 5000,
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error occured: {error.message}</p>;

//   // useEffect(() => {
//   //   async function fetchIds() {
//   //     const res = await fetch("https://dummyjson.com/products");
//   //     const data = await res.json();
//   //     setIsData(data.products); // store products array in state
//   //     console.log(data.products); // log fetched products directly
//   //   }
//   //   fetchIds();
//   // }, []);

//   //  const addButton = (e, id) => {
//   //   e.preventDefault();
//   //   console.log(data);

//   //   const cart = JSON.parse(localStorage.getItem(storageKey));

//   //   const item = data.products.find((product) => product.id == id);

//   //   localStorage.setItem(  storageKey,  JSON.stringify(cart ? [...cart, item] : [item])  );
//   //   };

//   const addButton = (e, id) => {
//     e.preventDefault();

//     const cart = JSON.parse(localStorage.getItem(storageKey)) || [];

//     // find product in API data
//     const product = data.products.find((p) => p.id === id);

//     // see if product already exists in cart
//     const existingItemIndex = cart.findIndex((item) => item.id === product.id);

//     if (existingItemIndex !== -1) {
//       // already in cart, increase quantity
//       cart[existingItemIndex].quantity += 1;
//     } else {
//       // not in cart yet, add with quantity 1
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem(storageKey, JSON.stringify(cart));

//   };

//   return (
//     <main className="py-12 static">
//       <Link to="/cart" className="">
//         <div className="md:ml-350 ml-100 border border-2 text-center w-20 h-20 rounded-full pt-6 sticky top-5">
//           Cart
//         </div>
//       </Link>

//       <div className="conatiner flex justify-center ">
//         <ul className="grid grid-cols-3 gap-3 max-w-3xl box-border">
//           {data.products.map((datas) => (
//             <li
//               key={datas.id}
//               className="border border-2 text-center rounded-2xl py-10 h-auto truncate transition-all duration-1000"
//             >
//               <div className="border-b text-center ">
//                 <img src={datas.images[0]} alt="" width={200} height={30} />
//               </div>

//               <span className="">{datas.title}</span>
//               <p>{datas.price}$</p>
//               {/* <p></p> */}
//               <button
//                 className="border border-1 mt-8 rounded-lg px-2 hover:bg-blue-200 bg-blue-50 transition duration-300 md:bg-amber-100"
//                 onClick={(e) => {
//                   addButton(e, datas.id);
//                 }}
//               >
//                 Add to cart
//               </button>
//             </li>
//           ))}
//         </ul>
//         {/* <ul className="grid grid-cols-3">
//           {isData.map((data) => (
//             <li key={data.id}>
//               <img src={data.images} alt="" width={200} height={30} />
//               {data.title}
//             </li>
//           ))}
//         </ul> */}
//       </div>
//       <button></button>
//     </main>
//   );
// }

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

export default function Home() {
  const storageKey = "cartList";

  const fetchIds = async () => {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("Error fetching data");
    return res.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchIds,
    staleTime: 5000,
  });

  if (isLoading) return <p className="text-center py-10">Loading...  <Spinner /></p>;
  if (error) return <p className="text-center py-10 text-red-500">{error.message}</p>;

  const addButton = (e, id) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem(storageKey)) || [];
    const product = data.products.find((p) => p.id === id);
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem(storageKey, JSON.stringify(cart));
  };
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => (
            <li
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <Link to={`product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>
              <div className="flex-1 flex flex-col p-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-1 truncate">
                  {product.title}
                </h2>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-gray-700 font-semibold">
                    ${product.price}
                  </span>
                  <Link
                    to={`product/${product.id}`}
                    className="font-semibold px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition"
                  >
                    Detail
                  </Link>
                  <button
                    onClick={(e) => addButton(e, product.id)}
                    className="font-semibold px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
