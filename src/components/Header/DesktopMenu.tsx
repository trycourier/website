import React from "react";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import MetaLink from "components/MetaLink";
import DocumentationIcon from "./icons/Documentation";
import APIReferenceIcon from "./icons/APIReference";
import HelpCenterIcon from "./icons/HelpCenter";
import CommunityIcon from "./icons/Community";
import StatusIcon from "./icons/Status";
import BlogIcon from "./icons/Blog";
import data from "./data";

interface CustomMenuProps {
  children: React.ReactNode;
  menuTitle: string;
  [x: string]: any;
}

const DesktopMenu = () => {
  const CustomMenuItem = ({
    children,
    menuTitle,
    ...other
  }: CustomMenuProps) => (
    <MenuItem
      {...other}
      fontWeight={500}
      fontSize="13px"
      lineHeight={"19.5px"}
      _hover={{ backgroundColor: "rgba(44,19,56,.04)" }}
      style={{ transition: "all .3s ease-in-out" }}
    >
      {children}
    </MenuItem>
  );

  const ChildMenuIcon = ({ iconName }: { iconName: string }) => {
    if (iconName === "DocumentationIcon") {
      return <DocumentationIcon />;
    }
    if (iconName === "APIReferenceIcon") {
      return <APIReferenceIcon />;
    }
    if (iconName === "CommunityIcon") {
      return <CommunityIcon />;
    }
    if (iconName === "StatusIcon") {
      return <StatusIcon />;
    }
    if (iconName === "BlogIcon") {
      return <BlogIcon />;
    }
    if (iconName === "HelpCenterIcon") {
      return <HelpCenterIcon />;
    }
    return <p />;
  };

  return (
    <Flex display={{ base: "none", lg: "flex" }}>
      {data.map((menu) => {
        if (menu.items) {
          return (
            <Menu isLazy key={menu.title}>
              <MenuButton
                as={Text}
                p="0 20px"
                variant="smallbody1"
                fontWeight="500"
                cursor="pointer"
              >
                {menu.title}
                <span style={{ paddingLeft: "4px" }}>
                  <ChevronDownIcon />
                </span>
              </MenuButton>
              <MenuList
                color="secondary.dark"
                minWidth="200px"
                py={3}
                borderRadius="16px"
              >
                {menu.items.map((childMenu: any) => (
                  <MetaLink
                    to={childMenu.link}
                    linkType={
                      childMenu.isExternalLink ? "external" : "internal"
                    }
                    key={childMenu.title}
                  >
                    <CustomMenuItem
                      py={3}
                      className={childMenu.className}
                      menuTitle={childMenu.title}
                    >
                      <ChildMenuIcon iconName={childMenu.icon} /> &nbsp;{" "}
                      {childMenu.title}
                    </CustomMenuItem>
                  </MetaLink>
                ))}
              </MenuList>
            </Menu>
          );
        } else {
          return (
            <MetaLink to={menu.link} linkType={"internal"} key={menu.title}>
              <Text p="0 20px" variant="smallbody1" fontWeight="500">
                {menu.title}
              </Text>
            </MetaLink>
          );
        }
      })}
    </Flex>
  );
};

export default DesktopMenu;
