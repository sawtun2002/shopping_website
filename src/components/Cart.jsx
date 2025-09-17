import React from "react";
import { useState } from "react";

export default function Cart() {
    
    const storageKey = "cartList";


    const [isData, setIsData] = useState(localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : [])
    
    
    
    const date =  new Date;
    const todayDate = date.toDateString();
    const todayTime = date.toLocaleTimeString();
   
    const data = JSON.parse(localStorage.getItem(storageKey));
    console.log( data);


     const deleteButton = (e,id) => {
         e.preventDefault();
          const alreadyFilter = data.filter((item) => item.id !== id);
          setIsData(alreadyFilter)
          localStorage.setItem(storageKey, JSON.stringify(alreadyFilter))
          console.log( alreadyFilter)   
      }
 
 
  return (
    <div>
      {isData.length == 0 ? (
        <p>No item in cart</p>
      ) : (
        <ul className="grid grid-cols-3">
          {isData.map((items) => (
            <li key={items.id}>
              {items.title}
              <p>{items.price}$</p>
              <p>{todayDate}</p>
              <p>{todayTime}</p>
              <button
                className=" border-2 hover:bg-gray-100 px-4 py-1  rounded-xl"
                onClick={(e) => deleteButton(e, items.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
