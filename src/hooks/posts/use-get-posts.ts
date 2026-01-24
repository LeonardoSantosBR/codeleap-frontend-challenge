import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts/posts";

export function useGetPosts(page: number) {
  return useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts(page),
    gcTime: 0,
    select: (res) => res.data
  });
}
