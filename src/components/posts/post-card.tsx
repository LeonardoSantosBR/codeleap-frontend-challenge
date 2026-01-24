import type { Post } from "../../types/create-post-payload";
import editIcon from "../../assets/icons/bx_bx-edit.png";
import deleteIcon from "../../assets/icons/ic_baseline-delete-forever.png";
import { useState } from "react";
import { DeletePostModal } from "../modals/posts/delete-posts-modal";
import { EditPostModal } from "../modals/posts/edit-posts-modal";

/**
 * 
 * @description responsavel por renderizar cada componente de uma publicação
 * @params recebe a publicação, sendo tipada por Post
 * @modals renderiza 2 modais de editar/excluir
 */
export function PostCard({ post }: { post: Post }) {
  const username = localStorage.getItem("username")!;
  const isOwner = username === post.username;
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div className="bg-white border border-[#cccccc] rounded-[16px] overflow-hidden">
      <div className="bg-[#7695EC] px-4 py-3 flex justify-between">
        <h3 className="text-white font-semibold">{post.title}</h3>

        {isOwner && (
          <div className="flex gap-3">
            <button onClick={() => setOpenDelete(true)}>
              <img src={deleteIcon} alt="Delete post" className="w-6 h-6" />
            </button>
            <button onClick={() => setOpenEdit(true)}>
              <img src={editIcon} alt="Edit post" className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-600 mb-2">@{post.username}</p>
        <p className="text-sm">{post.content}</p>
      </div>

      <DeletePostModal
        open={openDelete}
        postId={post.id}
        onClose={() => setOpenDelete(false)}
      />

      <EditPostModal
        open={openEdit}
        post={post}
        onClose={() => setOpenEdit(false)}
      />
    </div>
  );
}
