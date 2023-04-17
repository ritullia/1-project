import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../Header";

export const Post = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Header /> */}
      <div>One single post</div>
      <div>
        <button onClick={() => navigate("comments")}>Reed comments</button>
        <Outlet />
      </div>
    </>
  );
};
