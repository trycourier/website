import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import dayjs from "dayjs";

const Author = ({
  name,
  avatar,
  publishDate,
}: {
  name: string;
  avatar: string;
  publishDate: Date;
}) => (
  <Flex color="secondary.dark">
    <Avatar name={name} src={`${avatar}?w=48&h=48`} />
    <Box ml={3}>
      <Text>{name}</Text>
      <Text opacity="0.4" mt={1} variant="body3">
        {dayjs(publishDate).format("MMMM DD, YYYY")}
      </Text>
    </Box>
  </Flex>
);

export default Author;
