import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./features/dashBoard/DashBoardLayout";
import AllPosts from "./features/dashBoard/AllPost";
import MyPosts from "./features/dashBoard/MyPost";
import CreatePost from "./features/dashBoard/CreatePost";
import LoginForm from "./features/auth/LoginForm";
import SignUp from "./features/auth/Signup";
import LandingPage from "./features/landingPage/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="all" replace />} />
        <Route path="all" element={<AllPosts />} />
        <Route path="my" element={<MyPosts />} />
        <Route path="create" element={<CreatePost />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
