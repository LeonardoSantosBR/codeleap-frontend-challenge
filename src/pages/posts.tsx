import { CreatePost } from "../components/posts/create-post";
import { PostCard } from "../components/posts/post-card";
import { usePosts } from "../hooks/posts/use-posts";
import type { Post } from "../types/create-post-payload";
import { LoadingSpinner } from "../components/modals/loading";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export function Posts() {
  const { data: posts, isLoading } = usePosts();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-[#DDDDDD]">
      <header className="bg-[#7695EC] h-[80px] flex items-center justify-between px-[37px]">
        <h1 className="text-white text-[22px] font-bold">CodeLeap Network</h1>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 hover:bg-white/20 transition-colors rounded-lg"
          title="Sair"
        >
          <LogOut
            size={24}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </button>
      </header>

      <main className="max-w-[800px] mx-auto mt-6 flex flex-col gap-6 pb-10">
        <CreatePost />

        {isLoading && <LoadingSpinner />}

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
