import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from 'components/pages/blog/Single';
import { NextSeo } from 'next-seo';
import GetBlogPost from 'scripts/GetBlogPost';
import getAllBlogs from 'scripts/GetAllBlogs';

export async function getStaticPaths() {
    const allBlogs = await getAllBlogs();
    const allBlogPaths = [];
    for (let index = 0; index < allBlogs.length; index++) {
        const blog = allBlogs[index];
        allBlogPaths.push({
            params: {post: blog.fields.slug}
        })
    }
    return {
      paths: allBlogPaths,
      fallback: true
    };
}

export async function getStaticProps(context: any) {
    const { params } = context;
    const { post } = params;
    const postDetails = await GetBlogPost({slug: post});
    return {
        props: {postDetails}
    }
}

const Blog = ({postDetails}: {postDetails: any}) => {
    if(!postDetails) return <p></p>
    return (
        <>
            <NextSeo
                title={postDetails.title}
                description={postDetails.excerpt}
                canonical={`https://www.courier.com/blog/${postDetails.slug}`}
            />
            <Header headerPlain />
            <Content {...postDetails} />
            <Footer />
        </>            
    )
};

export default Blog;