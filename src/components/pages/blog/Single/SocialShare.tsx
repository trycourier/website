import { Flex, Box } from '@chakra-ui/react';
import TwitterShareIcon from 'components/icons/TwitterShare';
import LinkedInShareIcon from 'components/icons/LinkedInShare';
import RedditShareIcon from 'components/icons/RedditShare';
import ExternalLink from 'components/ExternalLink';
import React from 'react';

const SocialShare = ({slug, title }: { slug: string, title: string}) => {
    const blogUrl = `https://www.courier.com/blog/${slug}`;
    return (
        <Flex mb={{base: 5, md: 0}}>
            <ExternalLink to={`http://twitter.com/share?text=${title}&url=${blogUrl}`}>
                <TwitterShareIcon />
            </ExternalLink>
            <ExternalLink to={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`}>
                <Box px={4}>
                    <LinkedInShareIcon />
                </Box>
            </ExternalLink>
            <ExternalLink to={`http://www.reddit.com/submit?url=${blogUrl}&title=${title}`}>
                <RedditShareIcon />
            </ExternalLink>
        </Flex>
    )
};

export default SocialShare;