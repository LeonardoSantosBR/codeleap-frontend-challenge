import type { Post } from "./create-post-payload";

export type EditPostModalProps = {
  open: boolean;
  post: Post | null;
  onClose: () => void;
};