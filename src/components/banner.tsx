import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import ArrowIconSrc from "../images/arrow-icon.svg";
// import LogoSendGridSrc from "../images/logo-icon-sendgrid.svg";
import LogoSlackSrc from "../images/logo-icon-slack.svg";
import LogoTwilioSrc from "../images/logo-icon-twilio.svg";
import LogoYCSrc from "../images/logo-icon-yc.svg";

const HYPERLINK = "https://www.courier.com/blog/announcing-our-series-a"

const BannerWrapper = styled.div`
  ${tw`text-center py-3`}
  background-color: #efe3ee;
  color: #212124;
  font-weight: 400;

  .hidden {
    ${tw`hidden lg:inline`}
  }

  a {
    color: #6b295e;
    text-decoration: none;
    font-weight: 600;
  }
  a:hover {
    span {
      text-decoration: underline;
    }
  }

  img.icon {
    vertical-align: middle;
    position: relative;
    top: -1px;
  }

  .logo {
    display: inline-block;
    background-color: #fff;
    padding: 1px 2px;
    border-radius: 3px;
  }

  .brand {
    font-weight: 600;
    .logo {
      display: none;
    }
  }

  .read-more {
    display: inline-block;
    margin-left: 6px;
    color: #8d3776;
  }
`;

const Icon = ({ src }: { src: string }) => {
  return <img className="icon" src={src} width="16" />
}
const Logo = ({ src }: { src: string }) => {
  return <div className="logo"><Icon src={src} /></div>
}

export const Banner: React.FC = () => {
  const icon = (src: string) => <Icon src={src} />;
  const logo = (src: string) => <Logo src={src} />;
  const Brand = ({src, name}: {src?: string, name: string}) => <span className="brand">{(src ? logo(src) : null)} {name}</span>
  return (
    <BannerWrapper>
      <span className="text">
        <span>Announcing our $10M Series A</span>
        <span className="hidden"> from <Brand name="Bessemer Venture Partners" />, <Brand name="Matrix Partners" />, <Brand src={LogoTwilioSrc} name="Twilio" />, <Brand src={LogoSlackSrc} name="Slack" />, and <Brand src={LogoYCSrc} name="Y Combinator" /></span>
        <span> 🎉</span>
      </span>
      <a className="read-more" href={HYPERLINK}><span>Read more</span> {icon(ArrowIconSrc)}</a>
    </BannerWrapper>
  )
}
