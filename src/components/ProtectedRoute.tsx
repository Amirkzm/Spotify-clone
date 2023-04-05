import { Alert, AlertTitle, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface ProtectedRouteProps {
  path: string;
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  path,
  element: Component,
}: ProtectedRouteProps) => {
  const isUserAuthenticated = useSelector(
    (state: RootState) => state.userAuth.accessGranted
  );

  return (
    <Route
      path={path}
      element={
        isUserAuthenticated ? (
          Component
        ) : (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="warning" sx={{ width: "100%" }}>
              <AlertTitle>Warning</AlertTitle>
              You are not authenticated —{" "}
              <strong>Please login to continue</strong>
            </Alert>
            <Navigate to="/" replace state={{ from: path }} />
          </Stack>
        )
      }
    />
  );
};

export default ProtectedRoute;
