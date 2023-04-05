import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";

const ProtectedRoutes = () => {
  const isUserAuthenticated = useSelector(
    (state: RootState) => state.userAuth.accessGranted
  );
  return isUserAuthenticated ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
