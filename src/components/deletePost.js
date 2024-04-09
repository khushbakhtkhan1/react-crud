async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return postId;
}
export default deletePost;
