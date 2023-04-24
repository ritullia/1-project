import { Outlet } from "react-router-dom";

export const Comments = () => {
  return (
    <>
      <div>Comment for post 123</div>
      <Outlet />
    </>
  );
};
