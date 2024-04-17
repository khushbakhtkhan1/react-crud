"use client";

import AddPostForm from "../components/addPost";
import Posts from "../components/fetchPosts";
import { useMutation, useQueryClient, useQuery } from "react-query";
import deletePost from "../components/deletePost";
import updatePost from "../components/updatePost";
import LineChart from "../components/LineChart";
import BarChart from "@/components/BarChart";
import AreaChart from "@/components/AreaChart";

export default function Home() {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation((postId) => deletePost(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const updateMutation = useMutation(
    ({ postId, updates }) => updatePost(postId, updates),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const handleDelete = (postId) => {
    deleteMutation.mutate(postId);
  };

  const handleUpdate = (postId, updates) => {
    updateMutation.mutate({ postId, updates });
  };

  return (
    <div>
      <h1>My Posts</h1>
  
      <LineChart />
      <BarChart />
      <AreaChart />
   
    </div>
  );
}
