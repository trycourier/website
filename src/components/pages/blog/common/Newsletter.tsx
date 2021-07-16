import React, { useState, useRef } from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Alert,
  AlertIcon,
  Box,
  FormControl,
  Spinner,
} from "@chakra-ui/react";
import PurpleBgButton from "components/buttons/PurpleBg";
import submitHubSpotForm from "scripts/submitHubSpotForm";

const BlogNewsletter = () => {
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  async function handleSubscription() {
    const emailFieldValid = emailRef.current.reportValidity();
    if (emailFieldValid) {
      setIsLoading(true);
      const email = emailRef.current.value;

      await submitHubSpotForm("2d4975ec-6ff8-4609-b2d9-18fe9c701e5b", {
        email,
      });

      setIsLoading(false);
      setSubscriptionSuccess(true);
    }
  }

  return (
    <Box
      w={{ base: "100%", md: "438px" }}
      mx="auto"
      mt={"42px"}
      h="58px"
      p={{ base: "0 20px", md: "0" }}
    >
      {subscriptionSuccess ? (
        <Alert status="success">
          <AlertIcon />
          Thank You! You have been subscribed.
        </Alert>
      ) : (
        <FormControl>
          <InputGroup>
            <Input
              type="email"
              placeholder="Your email"
              w={{ base: "100%", md: "438px" }}
              h="58px"
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
              required
              ref={emailRef}
            />
            <InputRightElement pt={"18px"} mr={"4px"} width={"auto"}>
              <PurpleBgButton
                width={"133px"}
                height="50px"
                type="submit"
                onClick={handleSubscription}
                cursor="pointer"
              >
                {isLoading ? <Spinner /> : "Subscribe"}
              </PurpleBgButton>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      )}
    </Box>
  );
};

export default BlogNewsletter;
