import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Text, Image, Flex, CircularProgress } from '@chakra-ui/react';
import MessageIcon from './icons/Message';
import PushIcon from './icons/Push';
import SMSIcon from './icons/SMS';
import ChatIcon from './icons/Chat';

const channelImages = [
  { name: "Email", image: "/images/pages/home/hero/email.png", width: "506px", ml: {xl: "90px", "2xl": "100px"}, mt: "20px" },
  { name: "Push", image: "/images/pages/home/hero/push.png", width: "302px", ml: {base: "170px", "2xl": "170px"}, mt: "0px" },
  { name: "SMS", image: "/images/pages/home/hero/sms.png", width: "302px", ml: {base: "170px", "2xl": "170px"}, mt: "0px" },
  { name: "Chat", image: "/images/pages/home/hero/chat.png", width: "544px", ml: {base: "70px", "2xl": "80px"}, mt: "20px" },
];

const channelButtons = [
    { name: "Email", index: 0, icon: "" },
    { name: "SMS", index: 1, icon: "" },
    { name: "Push", index: 2, icon: "" },
    { name: "Chat", index: 3, icon: "" }
];

const ButtonIcon = ({name}) => {
    if(name === "Email") { return (<MessageIcon />) }
    if(name === "SMS") { return (<SMSIcon />) }
    if(name === "Push") { return (<PushIcon />) }
    if(name === "Chat") { return (<ChatIcon />) }
};

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, circularProgress0: 0, circularProgress1: 0, circularProgress2: 0, circularProgress3: 0, circularProgress4: 0}
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  componentDidMount() {
      setTimeout(() => {
        this.startProgressBar(0);
      },0);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  startProgressBar(slideIndex) {
      let progressCount = 0;
      const progressBar = setInterval(() => {
            const progressKey = `circularProgress${slideIndex}`;
            progressCount += 3;
            this.setState({[progressKey]: progressCount});
            if(progressCount >= 190) {
                this.setState({[progressKey]: 0});
                clearInterval(progressBar);
            }
      }, 100);
  }
  showSlideWithIndex(slideIndex) {
    this.setState({ activeIndex: slideIndex});
    this.slider.slickGoTo(slideIndex);
    this.startProgressBar(slideIndex);
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplaySpeed: 3800,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      beforeChange: (current, next) => this.showSlideWithIndex(next),
    };
    return (
        <Box maxWidth={"1063px"} mx="auto" w={"100%"} display={{base: "none", xl: "block"}}>
            <Box bg="url('/images/bannersliderBgNew@2x.png') no-repeat" backgroundSize="100% 100%"  mx='auto' mt={{base: "-180px", xl: '-500px'}} padding='0 20px' >
                <Box w={"100%"} h="648px" pt={"19px"}>
                    <Box w={"calc(100% - 62px)"}  h={"80%"} ml={"58px"} borderRadius="16px">
                        <Flex p="24px 44px 0 18px">
                            <Box w={"212px"} p="0 32px 0 0" pt={"82px"}>
                                {
                                    channelButtons.map(button => (
                                        <Flex h="38px" w={"180px"} bg="rgba(44,19,56,.03)" mb={"12px"} onClick={e => this.showSlideWithIndex(button.index)} align="center" justify="space-between" borderRadius="8px" p="0 14px" color={this.state.activeIndex === button.index ? "white": "rgba(44,19,56,.6)"} cursor="pointer" bg={this.state.activeIndex == button.index ? "linear-gradient(270deg,#9121c2,#ff5e5e)": "rgba(44,19,56,.03)"} transition="all .4s" sx={{
                                          ":hover": {
                                            background: "linear-gradient(270deg,#9121c2,#ff5e5e)",
                                            color: "white"
                                          }
                                        }} key={button.name}>
                                            <Flex>
                                                <ButtonIcon name={button.name} />
                                                <Text fontSize="11px" lineHeight="16px" fontWeight="600" pb={"0 14px"}ml={3}>{button.index + 1}. <span style={{paddingLeft: "1px"}}>{button.name}</span></Text>
                                            </Flex>
                                            {
                                                this.state.activeIndex === button.index ? <CircularProgress value={this.state[`circularProgress${button.index}`]} size="16px" color="white" trackColor="rgba(255, 255, 255, 0.16)"/>: <></>
                                            }
                                            
                                        </Flex>
                                    ))
                                }
                            </Box>
                            <Slider ref={c => (this.slider = c)} {...settings} style={{width: "calc(100% - 212px)", height: "592px", paddingTop: "82px"}}>
                                {
                                     channelImages.map(channel => (
                                        <Image src={channel.image} w={channel.width} maxW={channel.width} ml={channel.ml} mt={channel.mt} key={channel.name} />
                                     ))
                                }
                            </Slider>
                        </Flex>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    );
  }
}