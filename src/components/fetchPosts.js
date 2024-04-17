// import { useQuery } from "react-query";

// async function fetchPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// }

// export default function Posts() {
//   const { data: posts, error, isLoading } = useQuery("posts", fetchPosts);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>An error has occurred: {error.message}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <p key={post.id}>{post.title}</p>
//       ))}
//     </div>
//   );
// }
