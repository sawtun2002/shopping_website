// import { useQuery } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";


// const fetchPosts = async () => {
//     const response = await fetch(
//      "https://jsonplaceholder.typicode.com/posts"
//     );
//     if(!response.ok) throw new Error("Error fetching data"); 
//     return response.json();
// }

// export default function Posts() {
// const {data, isLoading, error} = useQuery({
//     queryKey: ['posts'],
//     queryFn: fetchPosts,
//     staleTime: 5000,
// })
//     if(isLoading) return <p>Loading...</p>;
//     if(error) return <p>Error occured: {error.message}</p>
//  return (
//     <main>
//         <ul>
//             <li key={data.id}>
//                 {data.map((post) => (
//                     <p>{post.title}</p>
//                 ))}
//             </li>
//         </ul>
                
//     </main>
//  );
// }





function Posts() {
  
    const fetchIds= async () => {
        const res = await fetch("https://dummyjson.com/products");
        
        if(!res.ok) throw new Error("Error fectchin data")
        return res.json()
      }


  const {data,error,isLoading,} = useQuery({
    queryKey: ["products"],
    queryFn: fetchIds,
    staleTime: 5000,
  });
  
  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>Error occured: {error.message}</p>;

    // useEffect(() => {
    //   async function fetchIds() {
    //     const res = await fetch("https://dummyjson.com/products");
    //     const data = await res.json();
    //     setIsData(data.products); // store products array in state
    //     console.log(data.products); // log fetched products directly
    //   }
    //   fetchIds();
    // }, []);
  return (
    <main className="py-12">
      <div className="ml-350 border border-2 text-center w-20 h-20 rounded-full pt-6">
        <span >cart</span>
      </div>
      <div className="conatiner flex justify-center">
        
        <ul className="grid grid-cols-3 gap-3 max-w-3xl box-border">
          {data.products.map((datas) => (
            <li
              key={datas.id}
              className="border border-2 text-center rounded-2xl py-10 max-h-90"
            >
              <div className="border-b text-center">
                <img src={datas.images[0]} alt="" width={200} height={30} />
              </div>

              <span>{datas.title}</span>
              <p>{datas.price}$</p>
              <button className="border border-1 mt-8 rounded-lg px-2">
                Add Cart
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
    </main>
  );
}

export default Posts;