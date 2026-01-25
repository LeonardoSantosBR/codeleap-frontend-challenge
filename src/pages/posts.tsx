import { CreatePost } from "../components/posts/create-post";
import { PostCard } from "../components/posts/post-card";
import { useGetPosts } from "../hooks/posts/use-get-posts";
import type { Post } from "../types/create-post-payload";
import { LoadingSpinner } from "../components/modals/loading/loading-modal";
import { HeaderPost } from "../components/posts/header-post";
import { useState } from "react";
import { Pagination } from "../components/pagination/pagination";
const pageSize = 5;

/**
 *
 * @description componente principal que renderiza 3 componentes: HeaderPost/CreatePost/PostCard
 * @pagination componente tambem utiliza paginacao
 */
export function Posts() {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading } = useGetPosts(page);

  const postsList = posts?.results ?? [];
  const totalPages = posts?.count ? Math.ceil(posts.count / pageSize) : 1;

  return (
    <div className="min-h-screen bg-[#DDDDDD]">
      <HeaderPost />

      <main className="max-w-[800px] mx-auto mt-6 flex flex-col gap-6 pb-10">
        <CreatePost />
        {posts
          ?.sort(
            (a: Post, b: Post) =>
              new Date(b.created_datetime).getTime() -
              new Date(a.created_datetime).getTime()
          )
          .map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        {isLoading && <LoadingSpinner />}

        <Pagination
          page={page}
          totalPages={totalPages}
          hasNext={Boolean(postsList?.next)}
          hasPrev={Boolean(postsList?.previous)}
          onChange={setPage}
        />
      </main>
    </div>
  );
}
