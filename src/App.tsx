import { Signup } from "./pages/signup";

function App() {
  const username = localStorage.getItem("username");

  if (!username) {
    return <Signup />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-xl font-semibold">
        Próxima tela (posts) 👀
      </h1>
    </div>
  )
}

export default App
