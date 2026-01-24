import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Posts } from "../pages/posts";
import { Signup } from "../pages/signup";

const RoutesOfAplication = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesOfAplication;
