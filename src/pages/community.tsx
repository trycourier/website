import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import colors from "../colors";
import Simple from "../templates/simple";

import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

const ArticleScreen = styled.div`
  ${tw`flex`}
`;

const ArticleList = styled.div`
  ${tw`w-3/4 mr-16`}
`;

const ArticleSearch = styled.div`
  ${tw`w-1/4`}
`;

const ArticleCard = styled.div`
  ${tw`w-full flex my-8`}
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
  }
`;

const ArticleImage = styled.img`
  ${tw`w-1/6 flex mr-4`}
  border-radius: 10px;
  min-width: 220px;
`;

const articles = [
  {
    image: {
      src: "https://placekitten.com/220/160",
      desc: "Sunset in the mountains",
    },
    title: "Notification Design Studio",
    author: "Name of Person",
    published: "Date/Time",
    html: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, nulla! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
  },
  {
    image: {
      src: "https://placekitten.com/220/160",
      desc: "Sunset in the mountains",
    },
    title: "Notification Design Studio",
    author: "Name of Person",
    published: "Date/Time",
    html: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, nulla! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
  },
  {
    image: {
      src: "https://placekitten.com/220/160",
      desc: "Sunset in the mountains",
    },
    title: "Notification Design Studio",
    author: "Name of Person",
    published: "Date/Time",
    html: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, nulla! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
  },
];

const Community: React.FC = () => {
  return (
    <Simple title="Community">

      <h1>All Articles</h1>
      <p>Feel free to share our content.</p>
      <ArticleScreen>
        <ArticleList>
          {articles.map(article => (
            <ArticleCard>
              <ArticleImage src={article.image.src} alt={article.image.desc} />

              <div className="px-4">
                <h4 className="font-bold text-xl py-0 mt-0 mb-2">
                  {article.title}
                </h4>
                <div className="posted">
                  Posted by <strong>{article.author}</strong> on{" "}
                  <strong>{article.published}</strong>
                </div>
                <p className="excerpt">{article.html}</p>
                <div className="px-6 py-4">
                  <Link>Read More</Link>
                </div>
              </div>
            </ArticleCard>
          ))}
        </ArticleList>
        <ArticleSearch>
            <SearchInput />

            <Tag>Long Tag</Tag>
            <Tag>Tag</Tag>
        </ArticleSearch>
      </ArticleScreen>
    </Simple>
  );
};

export default Community;
