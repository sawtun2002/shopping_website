// import React from "react";
// import { useState } from "react";

// export default function Cart() {
    
//     const storageKey = "cartList";


//     const [isData, setIsData] = useState(localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : [])
    
    
    
//     const date =  new Date;
//     const todayDate = date.toDateString();
//     const todayTime = date.toLocaleTimeString();
   
   


//      const deleteButton = (e,id) => {
//          e.preventDefault();
//           const alreadyFilter = isData.filter((item) => item.id !== id);
//           setIsData(alreadyFilter)
//           localStorage.setItem(storageKey, JSON.stringify(alreadyFilter))
//           console.log( alreadyFilter)   
//       }
 
//     const removeQuantity = (e, id) => {
//       e.preventDefault();

//       const updatedCart = isData
//         .map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity - 1 };
//           }
//           return item;
//         })
//         .filter((item) => item.quantity > 0);
        
        
//       setIsData(updatedCart);
//       localStorage.setItem(storageKey, JSON.stringify(updatedCart));
//     };


//     const addQuantity = (e, id) => {
//   e.preventDefault();

//   const updatedCart = isData.map(item => {
//     if (item.id === id) {
//       return { ...item, quantity: item.quantity + 1 };
//     }
//     return item;
//   });

//   setIsData(updatedCart);
//   localStorage.setItem(storageKey, JSON.stringify(updatedCart));
// };

//   return (
//     <div>
//       {isData.length == 0 ? (
//         <p>No item in cart</p>
//       ) : (
//         <ul className="grid grid-cols-3">
//           {isData.map((items) => (
//             <li key={items.id}>
//               {items.title}
//               <p>{items.price}$</p>
//               <p>{items.quantity}</p>
//               <p>{todayDate}</p>
//               <p>{todayTime}</p>
//               <button 
//               className=" border-2 hover:bg-gray-100 px-4 py-1  rounded-xl"
//               onClick={(e) => addQuantity(e, items.id)}
//               >
//                 +
//               </button>
//               <button
//                 className=" border-2 hover:bg-gray-100 px-4 py-1  rounded-xl"
//                 onClick={(e) => deleteButton(e, items.id)}
//               >
//                 Delete
//               </button>
//               <button
//                 className=" border-2 hover:bg-gray-100 px-4 py-1  rounded-xl py-1"
//                 onClick={(e) => removeQuantity(e, items.id)}
//               >
//                 -
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }























// import React, { useState } from "react";

// export default function Cart() {
//   const storageKey = "cartList";

//   const [isData, setIsData] = useState(
//     localStorage.getItem(storageKey)
//       ? JSON.parse(localStorage.getItem(storageKey))
//       : []
//   );

//   const date = new Date();
//   const todayDate = date.toDateString();
//   const todayTime = date.toLocaleTimeString();

//   const deleteButton = (e, id) => {
//     e.preventDefault();
//     const alreadyFilter = isData.filter((item) => item.id !== id);
//     setIsData(alreadyFilter);
//     localStorage.setItem(storageKey, JSON.stringify(alreadyFilter));
//   };

//   const removeQuantity = (e, id) => {
//     e.preventDefault();

//     const updatedCart = isData
//       .map((item) => {
//         if (item.id === id) {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//         return item;
//       })
//       .filter((item) => item.quantity > 0);

//     setIsData(updatedCart);
//     localStorage.setItem(storageKey, JSON.stringify(updatedCart));
//   };

//   const addQuantity = (e, id) => {
//     e.preventDefault();

//     const updatedCart = isData.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });

//     setIsData(updatedCart);
//     localStorage.setItem(storageKey, JSON.stringify(updatedCart));
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-3xl font-bold text-gray-700 mb-8">🛒 Your Cart</h1>

//         {isData.length === 0 ? (
//           <p className="text-center text-gray-500 mt-10 text-lg">
//             Your cart is empty.
//           </p>
//         ) : (
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {isData.map((items) => (
//               <li
//                 key={items.id}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between"
//               >
//                 <div>
//                   <img
//                     src={items.thumbnail || items.images?.[0]}
//                     alt={items.title}
//                     className="w-full h-40 object-cover rounded-lg mb-4"
//                   />
//                   <h2 className="text-lg font-semibold text-gray-700 truncate">
//                     {items.title}
//                   </h2>
//                   <p className="text-gray-500 mb-2">{items.price}$</p>
//                   <p className="text-sm text-gray-400">
//                     Added on: {todayDate} at {todayTime}
//                   </p>
//                   <p className="text-sm mt-1 text-gray-600">
//                     Quantity:{" "}
//                     <span className="font-medium text-gray-800">
//                       {items.quantity}
//                     </span>
//                   </p>
//                 </div>

//                 <div className="mt-4 flex items-center gap-2">
//                   <button
//                     className="flex-1 border border-gray-200 bg-gray-50 hover:bg-green-100 text-gray-700 px-3 py-2 rounded-lg transition"
//                     onClick={(e) => addQuantity(e, items.id)}
//                   >
//                     +
//                   </button>
//                   <button
//                     className="flex-1 border border-gray-200 bg-gray-50 hover:bg-red-100 text-gray-700 px-3 py-2 rounded-lg transition"
//                     onClick={(e) => removeQuantity(e, items.id)}
//                   >
//                     -
//                   </button>
//                   <button
//                     className="flex-1 border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2 rounded-lg transition"
//                     onClick={(e) => deleteButton(e, items.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }






























import React, { useState } from "react";

export default function Cart() {
  const storageKey = "cartList";

  const [isData, setIsData] = useState(
    localStorage.getItem(storageKey)
      ? JSON.parse(localStorage.getItem(storageKey))
      : []
  );

  const date = new Date();
  const todayDate = date.toDateString();
  const todayTime = date.toLocaleTimeString();

  const deleteButton = (e, id) => {
    e.preventDefault();
    const alreadyFilter = isData.filter((item) => item.id !== id);
    setIsData(alreadyFilter);
    localStorage.setItem(storageKey, JSON.stringify(alreadyFilter));
  };

  const removeQuantity = (e, id) => {
    e.preventDefault();

    const updatedCart = isData
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setIsData(updatedCart);
    localStorage.setItem(storageKey, JSON.stringify(updatedCart));
  };

  const addQuantity = (e, id) => {
    e.preventDefault();

    const updatedCart = isData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setIsData(updatedCart);
    localStorage.setItem(storageKey, JSON.stringify(updatedCart));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">🛒 Your Cart</h1>

        {isData.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isData.map((items) => (
              <li
                key={items.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={items.thumbnail || items.images?.[0]}
                    alt={items.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {items.title}
                  </h2>
                  <p className="text-gray-500 mb-2">{items.price}$</p>
                  <p className="text-sm text-gray-400">
                    Added on: {todayDate} at {todayTime}
                  </p>
                  <p className="text-sm mt-1 text-gray-600">
                    Quantity:{" "}
                    <span className="font-medium text-gray-800">
                      {items.quantity}
                    </span>
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <button
                    className="flex-1 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg transition"
                    onClick={(e) => addQuantity(e, items.id)}
                  >
                    +
                  </button>
                  <button
                    className="flex-1 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg transition"
                    onClick={(e) => removeQuantity(e, items.id)}
                  >
                    -
                  </button>
                  <button
                    className="flex-1 bg-rose-50 border border-rose-100 hover:bg-rose-100 text-rose-600 px-3 py-2 rounded-lg transition"
                    onClick={(e) => deleteButton(e, items.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
