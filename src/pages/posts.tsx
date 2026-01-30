import { CreatePost } from "../components/posts/create-post";
import { PostCard } from "../components/posts/post-card";
import { useGetPosts } from "../hooks/posts/use-get-posts";
import type { PostProps } from "../types/create-post-payload";
import { LoadingSpinner } from "../components/modals/loading/loading-modal";
import { HeaderPost } from "../components/posts/header-post";
import { useEffect, useState } from "react";
import { Pagination } from "../components/pagination/pagination";
import { useQueryClient } from "@tanstack/react-query";

/**
 *
 * @description componente principal que renderiza 3 componentes: HeaderPost/CreatePost/PostCard
 * @pagination componente tambem utiliza paginacao
 */
export function Posts() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const offset = (page - 1) * pageSize;
  const { data: posts, isLoading } = useGetPosts(offset, pageSize);

  const postsList = posts?.results ?? [];
  const totalPages = posts?.count ? Math.ceil(posts.count / pageSize) : 1;

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["posts"]});
  }, [pageSize]);

  return (
    <div className="min-h-screen bg-[#DDDDDD]">
      <HeaderPost />

      <main className="max-w-[800px] mx-auto mt-6 flex flex-col gap-6 pb-10">
        <CreatePost />
        {posts?.results
          ?.sort(
            (a: PostProps, b: PostProps) =>
              new Date(b.created_datetime).getTime() -
              new Date(a.created_datetime).getTime()
          )
          .map((post: PostProps) => (
            <PostCard key={post.id} post={post} />
          ))}
        {isLoading && <LoadingSpinner />}

        <div className="flex justify-center items-center mt-2 gap-2">
          <Pagination
            page={page}
            totalPages={totalPages}
            hasNext={Boolean(postsList?.next)}
            hasPrev={Boolean(postsList?.previous)}
            onChange={setPage}
          />
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="h-[32px] px-2 rounded-[8px] border border-[#CCCCCC] bg-white disabled:opacity-50"
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </main>
    </div>
  );
}
