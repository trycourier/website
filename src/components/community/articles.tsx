import React from "react";
import styled, { css } from "styled-components";
import tw from "tailwind.macro";
import Avatar from "../../images/avatar@2x.png";

import colors from "../../colors";

export const ArticleScreen = styled.div`
  ${tw`flex flex-col md:flex-row`}
`;

export const ArticleList = styled.div`
  ${tw`w-full md:w-3/4 md:mr-16`}
`;

export const ArticleSearch = styled.div`
  ${tw`w-full md:w-1/4 mt-8`}
`;

export const ArticleHeaderLink = styled.a`
  ${tw`no-underline`}
  & :hover {
    text-decoration: underline;
  }
  & h4 {
    ${tw`text-xl py-0 mt-0 mb-2`}
  }
`;

export const ArticleCard = styled.div`
  ${tw`w-full flex flex-col md:flex-row my-8`}
  & h4 {
    font-size: 22px;
    font-weight: 400;
    color: ${colors.textPrimary};
    margin: 0;
  }
  & div.posted {
    font-size: 14px;
    padding-top: 8px;
    & strong {
      color: ${colors.textPrimary};
    }
  }
  & p.excerpt {
    font-size: 14px;
    color: ${colors.textPrimary};
    margin-bottom: 10px;
    margin-top: 0px;
  }
`;

export const ArticleFooter = styled.div`
  ${tw`flex justify-between mt-4`}
`;

export const ArticlePreview = styled.div`
  ${tw`px-4 mt-4 md:mt-0`}
`;

export const ArticleImage = styled.img`
  ${tw`w-full md:w-1/6 flex mr-4`}
  border-radius: 10px;
  min-width: 220px;
`;

const linkStrongStyle = css`
  & strong {
    color: ${colors.textPrimary};
    & a {
      ${tw`no-underline`}
      color: ${colors.textPrimary};
      & :hover{
        text-decoration: underline;
      }
    }
  }
`;

type ArticlePostedType = {
  id: string;
  name: string;
  date?: string;
}
const PostedContent = styled.div`
  ${tw`py-2`}
  font-size: 14px;
  ${linkStrongStyle}
`;

export const ArticlePosted: React.FC = ({ id, name, date }: ArticlePostedType) => (
  <PostedContent>
    Posted by{" "}
    <strong>
      <a href={`/blog/authors/${id}`}>{name}</a>
    </strong>{" "}
    on <strong>{date}</strong>
  </PostedContent>
);


type ArticleAuthorType = {
  id: string;
  name: string;
  avatar?: string;
}
const AuthorCardContent = styled.div`
  ${tw`flex`}
  ${linkStrongStyle}
`;

export const AuthorCard: React.FC = ({id, name, avatar}: ArticleAuthorType) => (
  <AuthorCardContent>
    <img
      src={avatar || Avatar}
      width="60"
      height="60"
      style={{ borderRadius: 60, marginRight: 16 }}
    />
    <p>
      Author
      <br />
      <strong>
        <a href={`/blog/authors/${id}`}>
          {name}
        </a>
      </strong>
    </p>
  </AuthorCardContent>
);
