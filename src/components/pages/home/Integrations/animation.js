import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Text, Flex } from "@chakra-ui/react";
import WhatsAppIcon from "./icons/Whatsapp";
import AmazonSESIcon from "./icons/AmazonSES";
import MailgunIcon from "./icons/Mailgun";
import SendGridIcon from "./icons/SendGrid";
import SparkPostIcon from "./icons/SparkPost";
import MicrosoftTeamsIcon from "./icons/Teams";
import SlackIcon from "./icons/Slack";
import FBMessengerIcon from "./icons/Messenger";
import FirebaseIcon from "./icons/Firebase";
import OneSignalIcon from "./icons/OneSignal";
import AirshipIcon from "./icons/Airship";
import ExpoIcon from "./icons/Expo";
import TwilioIcon from "./icons/Twilio";
import MessageBirdIcon from "./icons/MessageBird";
import PlivoIcon from "./icons/Plivo";
import TelnyxIcon from "./icons/Telnyx";

const integrationsData = {
  email: [
    { name: "SendGrid", category: "Email", bgColor: "rgb(236, 250, 255)" },
    { name: "Mailgun", category: "Email", bgColor: "#C02428" },
    { name: "Amazon SES", category: "Email", bgColor: "#252F3E" },
    { name: "SparkPost", category: "Email", bgColor: "#FA6423" },
  ],
  sms: [
    { name: "Twilio", category: "SMS", bgColor: "#F22F46" },
    { name: "MessageBird", category: "SMS", bgColor: "#2481D7" },
    { name: "Plivo", category: "SMS", bgColor: "#43A046" },
    { name: "Telnyx", category: "SMS", bgColor: "#162836" },
  ],
  push: [
    { name: "Firebase", category: "Push", bgColor: "#32335C" },
    { name: "One Signal", category: "Push", bgColor: "#E44A49" },
    { name: "Airship", category: "Push", bgColor: "#004BFF" },
    { name: "Expo", category: "Push", bgColor: "#000020" },
  ],
  chat: [
    { name: "WhatsApp", category: "Chat", bgColor: "#44E761" },
    { name: "Microsoft Teams", category: "Chat", bgColor: "#565AAD" },
    { name: "Slack", category: "Chat", bgColor: "#4A154B" },
    { name: "FB Messenger", category: "Chat", bgColor: "#0072FD" },
  ],
};

const IntegrationIcon = ({ name, currentIndex }) => {
  if (name === "WhatsApp") {
    return <WhatsAppIcon />;
  }
  if (name === "Amazon SES") {
    return <AmazonSESIcon whiteFill={currentIndex !== 0 ? true : false} />;
  }
  if (name === "Mailgun") {
    return <MailgunIcon />;
  }
  if (name === "SendGrid") {
    return <SendGridIcon whiteFill={currentIndex !== 0 ? true : false} />;
  }
  if (name === "SparkPost") {
    return <SparkPostIcon />;
  }
  if (name === "Microsoft Teams") {
    return <MicrosoftTeamsIcon whiteFill={currentIndex !== 3 ? true : false} />;
  }
  if (name === "Slack") {
    return <SlackIcon whiteFill={currentIndex !== 3 ? true : false} />;
  }
  if (name === "FB Messenger") {
    return <FBMessengerIcon />;
  }
  if (name === "Firebase") {
    return <FirebaseIcon whiteFill={currentIndex !== 2 ? true : false} />;
  }
  if (name === "One Signal") {
    return <OneSignalIcon />;
  }
  if (name === "Airship") {
    return <AirshipIcon />;
  }
  if (name === "Expo") {
    return <ExpoIcon />;
  }
  if (name === "Twilio") {
    return <TwilioIcon />;
  }
  if (name === "MessageBird") {
    return <MessageBirdIcon />;
  }
  if (name === "Plivo") {
    return <PlivoIcon />;
  }
  if (name === "Telnyx") {
    return <TelnyxIcon whiteFill={currentIndex !== 1 ? true : false} />;
  }
};

const IntegrationsBox = ({ channel, index, currentIndex }) => (
  <Box>
    {integrationsData[channel].map((integration) => (
      <Flex
        boxShadow="0 3px 8px rgb(0 0 0 / 8%)"
        w={"220px"}
        h={"72px"}
        align="center"
        bg="white"
        margin="0 24px 22px 0"
        p="14px"
        key={integration.name}
      >
        <Flex
          w="44px"
          h="44px"
          bg={
            index - 1 == currentIndex
              ? integration.bgColor
              : "rgba(44,19,56,.16)"
          }
          justify="center"
          align="center"
          borderRadius="8px"
          key={integration.name}
        >
          <IntegrationIcon
            name={integration.name}
            currentIndex={currentIndex}
          />
        </Flex>
        <Box pl={"14px"} color="secondary.dark">
          <Text
            fontSize="14px"
            fontWeight="600"
            pb={1}
            opacity={index - 1 == currentIndex ? 1 : 0.56}
          >
            {integration.name}
          </Text>
          <Text variant="smallbody2" opacity="0.4">
            {integration.category}
          </Text>
        </Box>
      </Flex>
    ))}
  </Box>
);

const channelButtons = [
  { name: "Email", index: 0, icon: "" },
  { name: "SMS", index: 1, icon: "" },
  { name: "Push", index: 2, icon: "" },
  { name: "Chat", index: 3, icon: "" },
];

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  showSlideWithIndex(next) {
    this.setState({ activeIndex: next });
    this.slider.slickGoTo(next);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplaySpeed: 3800,
      speed: 500,
      autoplay: true,
      slidesToScroll: 1,
      slidesToShow: 3.6,
      beforeChange: (current, next) => this.showSlideWithIndex(next),
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1.6,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <Box
        mx="auto"
        maxW={{
          base: "100%",
          lg: "calc(100vw - 550px)",
          xl: "calc(100vw - 750px)",
          "2xl": "calc(100vw - 950px)",
        }}
        mt={{ base: "32px", lg: 0 }}
      >
        <Flex mb={"40px"}>
          {channelButtons.map((button) => (
            <Flex
              h="40px"
              w="77px"
              bg="rgba(44,19,56,.03)"
              mb={"12px"}
              onClick={(e) => this.showSlideWithIndex(button.index)}
              align="center"
              justify="center"
              borderRadius="8px"
              p="0 14px"
              color={
                this.state.activeIndex === button.index
                  ? "white"
                  : "rgba(255,94,94,.72)"
              }
              cursor="pointer"
              bg={
                this.state.activeIndex == button.index
                  ? "linear-gradient(270deg,#9121c2,#ff5e5e)"
                  : "#ffe8e8"
              }
              transition="all .4s"
              mr={4}
              key={button.name}
            >
              <Flex>
                <Text
                  fontSize="13px"
                  lineHeight="16px"
                  fontWeight="600"
                  pb={"0 14px"}
                >
                  {button.name}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <IntegrationsBox
            channel="chat"
            index={4}
            currentIndex={this.state.activeIndex}
          />
          <IntegrationsBox
            channel="email"
            index={1}
            currentIndex={this.state.activeIndex}
          />
          <IntegrationsBox
            channel="sms"
            index={2}
            currentIndex={this.state.activeIndex}
          />
          <IntegrationsBox
            channel="push"
            index={3}
            currentIndex={this.state.activeIndex}
          />
        </Slider>
      </Box>
    );
  }
}
