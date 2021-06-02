import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from 'components/pages/blog/Single';
import { NextSeo } from 'next-seo';
import GetBlogPostPreview from 'scripts/GetBlogPostPreview';

export async function getServerSideProps(context: any) {
    const { params } = context;
    const { post } = params;
    const postDetails = await GetBlogPostPreview({slug: post});
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
                description={""}
                noindex
                nofollow
            />
            <Header headerPlain />
            <Content {...postDetails} />
            <Footer />
        </>            
    )
};

export default Blog;