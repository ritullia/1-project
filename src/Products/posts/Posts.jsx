import { Outlet, useNavigate } from "react-router-dom";

import(Outlet);

export const Posts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ margin: "40px" }}>
        <p>List of posts</p>
        <button
          onClick={() => navigate("123")}
          className="btn btn-warning"
          style={{ color: "blue", fontWeight: "600" }}
        >
          Read post
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
