import { FC } from "react";
import { Outlet } from "react-router-dom";
type Props = {
  children?: React.ReactNode;
};
const BaseLayout: FC<Props> = ({ children }) => {

  return (
      <div>
        {children}
        <Outlet />
      </div>
  );
};

export default BaseLayout;
