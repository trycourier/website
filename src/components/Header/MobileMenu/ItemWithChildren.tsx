import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
} from "@chakra-ui/react";
import MetaLink from "components/MetaLink";
import DocumentationIcon from "../icons/Documentation";
import APIReferenceIcon from "../icons/APIReference";
import CommunityIcon from "../icons/Community";
import StatusIcon from "../icons/Status";
import BlogIcon from "../icons/Blog";
import HelpCenterIcon from "../icons/HelpCenter";

interface ItemWithChildrenProps {
  title: string;
  items: any[];
  key: string;
}

interface CustomMenuProps {
  children: React.ReactNode;
  [x: string]: any;
}

const CustomMenuItem = ({ children, ...other }: CustomMenuProps) => (
  <Text
    {...other}
    fontWeight={500}
    fontSize="13px"
    lineHeight={"19.5px"}
    _hover={{ backgroundColor: "rgba(44,19,56,.04)", borderRadius: "8px" }}
    style={{ transition: "all .3s ease-in-out" }}
  >
    {children}
  </Text>
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

const ItemWithChildren = ({ title, items, key }: ItemWithChildrenProps) => (
  <AccordionItem key={title} p="28px 0 20px">
    <AccordionButton pt={0} _hover={{ backgroundColor: "#FFFFFF" }}>
      <Box flex="1" textAlign="left">
        <Heading variant="h4" width="fit-content" color="secondary.dark">
          {title}
        </Heading>
      </Box>
      <AccordionIcon fontSize="2rem" />
    </AccordionButton>
    <AccordionPanel pb={0} pt={6}>
      {items.map((childMenu) => (
        <MetaLink
          to={childMenu.link}
          linkType={childMenu.isExternalLink ? "external" : "internal"}
        >
          <CustomMenuItem p={"11px 12px"} className={childMenu.className}>
            <ChildMenuIcon iconName={childMenu.icon} /> &nbsp; {childMenu.title}
          </CustomMenuItem>
        </MetaLink>
      ))}
    </AccordionPanel>
  </AccordionItem>
);

export default ItemWithChildren;
