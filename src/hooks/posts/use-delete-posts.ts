import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../../api/posts/posts";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
