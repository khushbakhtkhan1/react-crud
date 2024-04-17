// async function updatePost(postId, updates) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updates),
//     }
//   );
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// }

// export default updatePost;
