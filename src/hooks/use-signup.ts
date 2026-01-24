import { useMutation } from "@tanstack/react-query";
import { createCareer } from "../api/carrers/careers";

export function useSignup() {
  return useMutation({
    mutationFn: (username: string) =>
      createCareer({
        username,
        title: "",
        content: "",
        author_ip: "",
      }),
  });
}