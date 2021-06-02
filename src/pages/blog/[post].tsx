import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from 'components/pages/blog/Single';
import { NextSeo } from 'next-seo';
import GetBlogPost from 'scripts/GetBlogPost';

export async function getServerSideProps(context: any) {
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