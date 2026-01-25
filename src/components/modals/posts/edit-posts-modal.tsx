/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useUpdatePost } from "../../../hooks/posts/use-update-posts";
import type { EditPostModalProps } from "../../../types/edit-post-modal";

export function EditPostModal({ open, post, onClose }: EditPostModalProps) {
  const { mutate, isPending } = useUpdatePost();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!open || !post) return;
    setTitle(post.title);
    setContent(post.content);
  }, [open, post]);

  if (!open) return null;
  const disabled = !title.trim() || !content.trim() || isPending;

  function handleSave() {
    if (!post) return;
    mutate(
      { id: post.id, title: title.trim(), content: content.trim() },
      { onSuccess: () => onClose() }
    );
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close edit modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 cursor-default"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-[660px] max-w-full bg-white border border-[#CCCCCC] rounded-[16px] p-6">
          <h2 className="text-[18px] font-semibold text-black">Edit item</h2>

          <div className="mt-4">
            <label className="text-[14px] text-black">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full h-[32px] px-3 border border-[#CCCCCC] rounded-[8px] text-[14px] focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="text-[14px] text-black">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 w-full h-[80px] px-3 py-2 border border-[#CCCCCC] rounded-[8px] text-[14px] resize-none focus:outline-none"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isPending}
              className="h-[32px] px-6 rounded-[8px] border border-[#CCCCCC] bg-white text-[14px]"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              disabled={disabled}
              className="h-[32px] px-6 rounded-[8px] bg-[#47B960] text-white text-[14px] font-medium disabled:opacity-70"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
