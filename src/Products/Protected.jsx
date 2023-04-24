import { Outlet, Navigate } from "react-router-dom";

const Protected = ({ isSignedIn }) => {
  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet> </Outlet>;
};

export default Protected;
