import classnames from "classnames";
import React, { useState } from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

import Hamburger from "./Hamburger";
import Menu from "./Menu";

export type Props = Merge<
  ContainerProps,
  { toggleMenu(): void; menu: boolean }
>;
export const Component: React.FC<Props> = ({ className, toggleMenu, menu }) => (
  <>
    <div className={classnames(className, "flex")}>
      <Hamburger
        toggleMenu={toggleMenu}
        menu={menu}
        className={classnames("z-50")}
      />
      <Menu
        className={classnames("menu", "absolute", "left-0", "mb-4")}
        open={menu}
      />
    </div>
  </>
);
export const StyledComponent: typeof Component = styled(Component)`
  > .menu {
    bottom: 100%;
  }
`;

export type ContainerProps = {
  className?: string;
};
export const MobileNav: React.FC<ContainerProps> = (props) => {
  const [state, setState] = useState(false);

  const toggleMenu = (): void => {
    setState(!state);
  };

  return <StyledComponent {...props} toggleMenu={toggleMenu} menu={state} />;
};

export default MobileNav;
