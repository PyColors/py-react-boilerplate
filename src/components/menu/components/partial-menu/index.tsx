import Tab from "@material-ui/core/Tab";
import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

import { MenuItem } from "../../../../interfaces/menu-item.interface";
import { paths } from "../../menu.constants";
import { cleanPathname } from "../../menu.utils";

interface PartialMenuProps {
  items: MenuItem[];
  pathname: string;
  pathsToKeep?: string[];
}

const PartialMenu = ({
  items,
  pathname,
  pathsToKeep = paths
}: PartialMenuProps) => {
  const { formatMessage } = useIntl();
  return (
    <Fragment key="partial-menu">
      {items.map(({ label, path }) => {
        const cleanPath = cleanPathname(path, pathsToKeep);
        return (
          <Tab
            key={path}
            selected={cleanPath === pathname}
            to={path}
            label={formatMessage({ id: label })}
            component={Link}
          />
        );
      })}
    </Fragment>
  );
};

export default PartialMenu;
