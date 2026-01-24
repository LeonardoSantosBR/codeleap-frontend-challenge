import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts/posts";

export function useGetPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    select: (response) => response.data.results,
  });
}