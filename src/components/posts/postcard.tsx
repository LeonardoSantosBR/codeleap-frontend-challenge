import type { Post } from "../../types/create-post-payload";

export function PostCard({ post }: { post: Post }) {
  const username = localStorage.getItem("username");
  const isOwner = username === post.username;

  return (
    <div className="bg-white border border-[#cccccc] rounded-[16px] overflow-hidden">
      <div className="bg-[#7695EC] px-4 py-3 flex justify-between">
        <h3 className="text-white font-semibold">{post.title}</h3>

        {isOwner && (
          <div className="flex gap-3">
            <button>✏️</button>
            <button>🗑️</button>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-600 mb-2">
          @{post.username}
        </p>
        <p className="text-sm">{post.content}</p>
      </div>
    </div>
  );
}
