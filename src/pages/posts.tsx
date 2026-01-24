import { CreatePost } from "../components/posts/create-post";
import { PostCard } from "../components/posts/postcard";
import { usePosts } from "../hooks/posts/use-posts";
import type { Post } from "../types/create-post-payload";

export function Posts() {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className="min-h-screen bg-[#DDDDDD]">
      <header className="bg-[#7695EC] h-[80px] flex items-center px-6">
        <h1 className="text-white text-[22px] font-bold">
          CodeLeap Network
        </h1>
      </header>

      <main className="max-w-[800px] mx-auto mt-6 flex flex-col gap-6">
        <CreatePost />

        {isLoading && <p>Loading...</p>}

        {posts
          ?.sort(
            (a: Post, b: Post) =>
              new Date(b.created_datetime).getTime() -
              new Date(a.created_datetime).getTime()
          )
          .map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </main>
    </div>
  );
}
