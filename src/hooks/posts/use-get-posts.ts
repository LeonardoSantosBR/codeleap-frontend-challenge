import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts/posts";

export function useGetPosts(offset: number, pageSize: number) {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(offset, pageSize),
    select: (res) => res.data,
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
