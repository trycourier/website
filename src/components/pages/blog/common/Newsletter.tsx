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

function getCookie({ name }: { name: string }) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift();
}

function makeFormObj({ email, hutk }: { email: string; hutk: string }) {
  const data = {
    submittedAt: new Date().valueOf(),
    fields: [
      {
        name: "email",
        value: email,
      },
    ],
    context: {
      hutk: hutk,
      pageUri: window.location.href,
      pageName: document.title,
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to allow Courier to store and process my personal data.",
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: "I agree to receive marketing communications from Courier.",
          },
        ],
      },
    },
  };
  return data;
}

const BlogNewsletter = () => {
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const HS_FORM_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/6196736/2d4975ec-6ff8-4609-b2d9-18fe9c701e5b`;

  async function handleSubscription() {
    const emailFieldValid = emailRef.current.reportValidity();
    if (emailFieldValid) {
      setIsLoading(true);
      const email = emailRef.current.value;
      let hutk = getCookie({ name: "hubspotutk" });
      if (!hutk) {
        hutk = "0357bb413489ee6bfdeda28e0566a639";
      }

      const submitFormObj = makeFormObj({ email, hutk });
      await fetch(HS_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitFormObj),
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
