import { useState } from "react";
import { useCreatePost } from "../../hooks/posts/use-create-posts";

/**
 *
 * @description responsavel por renderizar componente de criação da publicação
 */
export function CreatePost() {
  const username = localStorage.getItem("username")!;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { mutate, isPending } = useCreatePost();

  const disabled = !title || !content;

  function handleCreate() {
    mutate(
      {
        username,
        title,
        content,
        author_ip: "",
      },
    );
    setTitle("");
    setContent("");
  }

  return (
    <div className="bg-white border border-[#cccccc] rounded-[16px] p-8">
      <h1 className="text-[22px] font-bold mb-4">What’s on your mind?</h1>

      <div className="pb-3">
        <label className="text-lg">Title</label>
        <input
          value={title}
          placeholder="Hello world"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-[#cccccc] rounded-xl p-3 mb-3"
        />
      </div>

      <div>
        <label className="text-lg">Content</label>
        <textarea
          value={content}
          placeholder="Content here"
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-[#cccccc] rounded-xl p-3 h-[80px]"
        />
      </div>

      <div className="flex justify-end mt-3">
        <button
          disabled={disabled || isPending}
          onClick={handleCreate}
          className={`px-4 py-2 rounded text-white ${
            disabled ? "bg-gray-400" : "bg-[#7695EC]"
          }`}
        >
          Create
        </button>
      </div>
    </div>
  );
}
