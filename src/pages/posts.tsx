import { CreatePost } from "../components/posts/create-post";
import { PostCard } from "../components/posts/post-card";
import { useGetPosts } from "../hooks/posts/use-get-posts";
import type { PostProps } from "../types/create-post-payload";
import { LoadingSpinner } from "../components/modals/loading/loading-modal";
import { HeaderPost } from "../components/posts/header-post";
import { useState } from "react";
import { Pagination } from "../components/pagination/pagination";

/**
 *
 * @description componente principal que renderiza 3 componentes: HeaderPost/CreatePost/PostCard
 * @pagination componente tambem utiliza paginacao
*/
export function Posts() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const offset = (page - 1) * pageSize;
  const { data: posts, isLoading } = useGetPosts(offset, pageSize);

  console.log("AQUIII", posts);
  const postsList = posts?.results ?? [];
  const totalPages = posts?.count ? Math.ceil(posts.count / pageSize) : 1;

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
