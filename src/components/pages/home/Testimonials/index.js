import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Heading, Text, Image, Flex, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import testimonials from "./data";
import slideSettings from "./sliderSettings";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <div>
        <Box
          mt={{ base: "92px", lg: "112px" }}
          textAlign="center"
          padding="0 20px"
          mx="auto"
        >
          <Heading variant="h2" as="h2" color="secondary.dark" mb={"22px"}>
            You're in good company
          </Heading>
          <Flex
            position="relative"
            direction={{ base: "column-reverse", xl: "row" }}
          >
            <Flex
              pl={{ base: 0, md: 5, xl: "150px", "2xl": "350px" }}
              w={"30%"}
              my={{ base: 0, xl: 20 }}
              direction="column"
              justify="space-between"
              mx="auto"
            >
              <Box
                display={{ base: "none", xl: "block" }}
                mr={{ base: 0, xl: 16 }}
              >
                <Image src={"/images/testiquote.svg"} />
              </Box>
              <Flex mr={{ base: 0, xl: 16 }}>
                <IconButton
                  aria-label="Arrow Back Icon"
                  icon={<ArrowBackIcon />}
                  onClick={this.previous}
                  boxSize="48px"
                  bg="rgba(44,19,56,.06)"
                  _hover={{ bg: "rgba(44,19,56,.06)" }}
                />
                <IconButton
                  aria-label="Arrow Back Icon"
                  icon={<ArrowForwardIcon />}
                  onClick={this.next}
                  boxSize="48px"
                  bg="rgba(44,19,56,.06)"
                  ml={5}
                  _hover={{ bg: "rgba(44,19,56,.06)" }}
                />
              </Flex>
            </Flex>
            <Slider
              ref={(c) => (this.slider = c)}
              {...slideSettings}
              style={{ overflow: "hidden", width: "100%" }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <Box
                    boxShadow="0 10px 30px rgb(0 0 0 / 8%)"
                    p="32px"
                    w={{ base: "325px", md: "376px" }}
                    h={{ base: "450px", md: "400px" }}
                    mr={"32px"}
                    my={20}
                    position="relative"
                  >
                    <Flex>
                      <Image
                        src={testimonial.Image.url}
                        w={"72px"}
                        h={"72px"}
                        borderRadius="12px"
                      />
                      <Flex ml={"24px"} direction="column">
                        <Heading variant="subh1" w={"fit-content"}>
                          {testimonial.Name}
                        </Heading>
                        <Text variant="body2" opacity="0.48">
                          {testimonial.Designation}
                        </Text>
                      </Flex>
                    </Flex>
                    <Text textAlign="left" mt={"32px"}>
                      {testimonial.Comment}
                    </Text>
                    <Image
                      src={testimonial.CompanyLogo.url}
                      mt={"32px"}
                      position="absolute"
                      bottom="32px"
                    />
                  </Box>
                </div>
              ))}
            </Slider>
          </Flex>
        </Box>
      </div>
    );
  }
}
