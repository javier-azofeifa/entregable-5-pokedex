import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const trainer = useSelector((store) => store.trainer);

  if (trainer.length > 2) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectedRoutes;