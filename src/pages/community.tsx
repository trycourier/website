import React from "react";
import { Link } from "gatsby";
import Simple from "../templates/simple";

import { ArticleCard, ArticleImage, ArticleList, ArticleScreen } from "../components/community/articles";
import SearchInput from "../components/community/search-input";
import Tag from "../components/community/tag";

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
