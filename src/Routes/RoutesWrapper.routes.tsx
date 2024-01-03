import { useUser } from "../hooks/useUser";
import { AuthorizedAppContent } from "./AuthorizedRoutes.routes";
import { UnauthorizedRoutesContent } from "./UnauthorizedRoutes.routes";

export const RoutesWrapper = () => {
  const { user } = useUser();

  if (user) return <AuthorizedAppContent />;

  return <UnauthorizedRoutesContent />;
};
