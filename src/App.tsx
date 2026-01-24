import { Posts } from "./pages/posts";
import { Signup } from "./pages/signup";

function App() {
  const isAuthenticated  = localStorage.getItem("username");
  if (!isAuthenticated ) {
    return <Signup />;
  }
  return <Posts />;
}

export default App;
