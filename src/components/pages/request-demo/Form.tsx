import {
  chakra,
  Flex,
  Box,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Select,
  Textarea,
  Link,
  Text,
  Container,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import PurpleBgButton from "components/buttons/PurpleBg";
import submitHubSpotForm from "scripts/submitHubSpotForm";
import InternalLink from "components/InternalLink";

import { privacy, disclosure } from "constants/urls";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  notificationVolume: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  notificationVolume: Yup.string().required("Required"),
});

const Form = () => {
  return (
    <Box flex={1} minW={0}>
      <Box px={{ lg: "80px" }} height="100%">
        <Container
          display="flex"
          flexDirection="column"
          height="100%"
          pt={{ base: 8, lg: "60px" }}
          pb={8}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, form) => {
              form.setStatus();

              const body = await submitHubSpotForm(
                "8237956f-b20d-43be-a987-2fadf6b42d33",
                {
                  firstname: values.firstName,
                  lastname: values.lastName,
                  email: values.email,
                  notification_volume__lead_gen_: values.notificationVolume,
                  message: values.message,
                }
              );

              if (body.status !== "error") {
                form.resetForm();
                form.setStatus("success");
                return;
              }

              const emailError = body.errors?.some((error) =>
                ["INVALID_EMAIL", "BLOCKED_EMAIL"].includes(error.errorType)
              );
              const otherError = body.errors?.some(
                (error) =>
                  !["INVALID_EMAIL", "BLOCKED_EMAIL"].includes(error.errorType)
              );

              if (emailError) {
                form.setErrors({ email: "Invalid Work email" });
              }

              if (otherError) {
                form.setStatus("error");
              }
            }}
          >
            {({
              status,
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <chakra.form flex={1} onSubmit={handleSubmit}>
                {status && (
                  <Alert status={status} mb={8}>
                    <AlertIcon />
                    <Text variant="smallbody1">
                      {status === "success"
                        ? "Thank you, we will be in touch shortly!"
                        : "Error submitting the form"}
                    </Text>
                  </Alert>
                )}

                <Flex mb={8} direction={{ base: "column", md: "row" }}>
                  <FormControl
                    mb={{ base: 8, md: 0 }}
                    flex={1}
                    mr={5}
                    isInvalid={!!touched.firstName && !!errors.firstName}
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input
                      size="xl"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    flex={1}
                    isInvalid={!!touched.lastName && !!errors.lastName}
                  >
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      size="xl"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>
                </Flex>
                <FormControl
                  mb={8}
                  isInvalid={!!touched.email && !!errors.email}
                >
                  <FormLabel>Work Email</FormLabel>
                  <Input
                    size="xl"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  mb={8}
                  isInvalid={
                    !!touched.notificationVolume && !!errors.notificationVolume
                  }
                >
                  <FormLabel>Notification Volume</FormLabel>
                  <Select
                    size="xl"
                    name="notificationVolume"
                    value={values.notificationVolume}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled></option>
                    <option value="Less than 100,000/month">
                      Less than 100,000/month
                    </option>
                    <option value="100,000-500,000/month">
                      100,000-500,000/month
                    </option>
                    <option value="500,000-1,000,000/month">
                      500,000-1,000,000/month
                    </option>
                    <option value="1,000,000-10,000,000/month">
                      1,000,000-10,000,000/month
                    </option>
                    <option value="More than 10,000,000/month">
                      More than 10,000,000/month
                    </option>
                  </Select>
                  <FormErrorMessage>
                    {errors.notificationVolume}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  mb={8}
                  isInvalid={!!touched.message && !!errors.message}
                >
                  <FormLabel>Anything else?</FormLabel>
                  <Textarea
                    size="xl"
                    resize="none"
                    height="150px"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>
                <PurpleBgButton
                  width="100%"
                  height="50px"
                  as="button"
                  type="submit"
                >
                  {isSubmitting ? <Spinner /> : "Send Request"}
                </PurpleBgButton>
              </chakra.form>
            )}
          </Formik>

          <Flex mt={8} flexWrap="wrap">
            <Box mr={8}>
              <InternalLink to={privacy}>
                <Text
                  variant="smallbody2"
                  as="span"
                  color="secondary.dark"
                  _hover={{ textDecoration: "underline" }}
                >
                  Privacy Policy
                </Text>
              </InternalLink>
            </Box>

            <InternalLink to={disclosure}>
              <Text
                variant="smallbody2"
                as="span"
                color="secondary.dark"
                _hover={{ textDecoration: "underline" }}
              >
                Responsible Discourse Policy
              </Text>
            </InternalLink>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Form;
