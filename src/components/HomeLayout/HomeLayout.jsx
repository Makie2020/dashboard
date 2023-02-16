import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div pages={[
          { label: "Login", path: "/login" }
        ]}>
      {outlet}
    </div>
  );
};
