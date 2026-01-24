import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "../../api/posts/posts";

export function useUpdatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: { id: number; title: string; content: string }) =>
      updatePost(params.id, { title: params.title, content: params.content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}