import React, { useRef, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalBody,
  Divider,
  Flex,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import HashSignIcon from "components/icons/HashSign";
import ReturnMarkIcon from "components/icons/ReturnMark";
import InternalLink from "components/InternalLink";

interface SearchResult {
  title: string;
  tag: string;
  slug: string;
}

//TODO: component-ize

const SearchButton = ({ ...other }) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const finalRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const getSearchResults = async (event: any) => {
    const query = event.target.value;
    const res = await fetch(`/api/blog-search?query=${query}`);
    const data = await res.json();
    setResults(data.results);
  };

  return (
    <>
      {/* Search Button */}
      <InputGroup mb={"22px"} {...other} onClick={onOpen}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="#9B8FA0" />}
          h={{ base: "40px", xl: "52px" }}
        />
        <Input
          placeholder="Search"
          h={{ base: "40px", xl: "52px" }}
          focusBorderColor="none"
          borderColor="#E4E3E7"
          borderWidth="1px"
          sx={{
            ":hover": {
              borderColor: "#E4E3E7",
            },
          }}
          color="secondary.dark"
          _placeholder={{ color: "#9B8FA0" }}
        />
      </InputGroup>

      {/* MODAL */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        preserveScrollBarGap={true}
      >
        <ModalOverlay />
        <ModalContent maxWidth={{ base: "90%", md: "600px" }}>
          <ModalBody px={0}>
            <Box px={6}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="secondary.dark" />}
                />
                <Input
                  ref={initialRef}
                  placeholder="Search the blog"
                  border="none"
                  focusBorderColor="none"
                  _placeholder={{ color: "#9B8FA0" }}
                  color="secondary.dark"
                  onChange={getSearchResults}
                />
              </InputGroup>
            </Box>
            {results.length > 0 && (
              <Box maxHeight={"60vh"} overflowY="auto" px={6}>
                <Divider />
                <Box mt={3}>
                  {results.map((result) => (
                    <InternalLink to={`/blog/${result.slug}`}>
                      <Flex
                        p={3}
                        bg="#F7F6F7"
                        mb={3}
                        borderRadius="6px"
                        justify="space-between"
                        align="center"
                        sx={{
                          ":hover .search-result-title": {
                            background:
                              "linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            width: "fit-content",
                          },
                        }}
                      >
                        <Flex align="center">
                          <HashSignIcon />
                          <Box ml={3}>
                            <Text fontSize="xs" color="#68707F">
                              {result.tag}
                            </Text>
                            <Text
                              color="#1A212C"
                              fontWeight="500"
                              fontSize="md"
                              className="search-result-title"
                            >
                              {result.title}
                            </Text>
                          </Box>
                        </Flex>
                        <ReturnMarkIcon />
                      </Flex>
                    </InternalLink>
                  ))}
                </Box>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchButton;
