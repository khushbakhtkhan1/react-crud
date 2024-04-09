import { useMutation, useQueryClient } from "react-query";

async function addPost(post) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default function AddPostForm() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const post = { title: form.elements.title.value };
    mutation.mutate(post);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" required />
      <button type="submit">Add Post</button>
    </form>
  );
}
