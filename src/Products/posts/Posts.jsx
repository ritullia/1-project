import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../Header";
import(Outlet);

export const Posts = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div>
        List of posts
        <button onClick={() => navigate("123")}>Read post</button>
        <Outlet />
      </div>
    </>
  );
};
