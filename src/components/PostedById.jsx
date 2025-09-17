// import { useQuery } from "@tanstack/react-query";

// const fetchPosts = async (id) => {
//     const response = await fetch(
//      `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//     if(!response.ok) throw new Error("Error fetching data"); 
//     return response.json();
// }

// export default function PostedById({id}) {
// const {data, isLoading, error} = useQuery({
//     queryKey: ['posts', id],
//     queryFn: () => fetchPosts(id),
//     staleTime: 5000,
// })
//     if(isLoading) return <p>Loading...</p>;
//     if(error) return <p>Error occured: {error.message}</p>
//  return (
//     <main>
//                 {data.title}
            
//     </main>
//  );

// }