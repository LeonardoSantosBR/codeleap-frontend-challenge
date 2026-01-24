import { useEffect } from "react";
import { useDeletePost } from "../../../hooks/posts/use-delete-posts";
import type { DeletePostModalProps } from "../../../types/delete-post-modals";

export function DeletePostModal({ open, postId, onClose }: DeletePostModalProps) {
  const { mutate, isPending } = useDeletePost();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  function handleDelete() {
    if (!postId) return;
    mutate(postId, {
      onSuccess: () => onClose(),
    });
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close delete modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 cursor-default"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-[660px] max-w-full bg-white border border-[#CCCCCC] rounded-[16px] p-6">
          <h2 className="text-[18px] font-semibold text-black">
            Are you sure you want to delete this item?
          </h2>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isPending}
              className="h-[32px] px-6 rounded-[8px] border border-[#CCCCCC] bg-white text-[14px]"
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              disabled={isPending}
              className="h-[32px] px-6 rounded-[8px] bg-[#FF5151] text-white text-[14px] font-medium disabled:opacity-70"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}