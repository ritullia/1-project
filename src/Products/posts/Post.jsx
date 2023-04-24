import { Outlet, useNavigate } from "react-router-dom";

export const Post = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>One single post</div>
      <div>
        <button
          onClick={() => navigate("comments")}
          className="btn btn-info"
          style={{ color: "blue", fontWeight: "600" }}
        >
          Reed comments
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
