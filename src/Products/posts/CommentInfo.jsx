import { Outlet } from "react-router-dom";

export const CommentInfo = () => {
  return (
    <>
      <div>
        All comments info here:
        <Outlet />
      </div>
    </>
  );
};
