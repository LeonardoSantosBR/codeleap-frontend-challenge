import type { PostProps } from "./create-post-payload";

export type EditPostModalProps = {
  open: boolean;
  post: PostProps | null;
  onClose: () => void;
};