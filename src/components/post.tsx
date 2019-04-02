import React from 'react'

type PostParams = {
  title: string
  date: string
  html: string
}

const Post: React.FunctionComponent<PostParams> = ({ title, date, html }) => (
  <section className="section bg-gray">
    <div className="container">
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{title}</h1>
          <h2>{date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  </section>
)

export default Post
