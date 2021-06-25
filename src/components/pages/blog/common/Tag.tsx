import { Tag } from '@chakra-ui/react';

interface ColorProps {
    [any: string]: {
        color: string;
        bg: string;
    }
}

const colorMap: ColorProps = {
    "INTEGRATIONS": {color:"#F07978", bg:"#FCE9E9"},
    "ENGINEERING": {color:"#F07978", bg:"#FCE9E9"},
    "COURIER": {color:"#9122C2", bg:"#EEE0F7"},
    "COURIER LIVE": {color:"#9122C2", bg:"#EEE0F7"},
    "PRODUCT MANAGEMENT": {color:"#F07978", bg:"#FCE9E9"},
    "NOTIFICATIONS LANDSCAPE": {color:"#F19301", bg:"#FDF4DD"},
    "NEWS & UPDATES": {color:"#F19301", bg:"#FDF4DD"},
    "LIVE STREAMING": {color:"#9122C2", bg:"#EEE0F7"},
}

const BlogPostTag = ({tag}: {tag: string}) => {
    return (
        <Tag color={colorMap[tag]["color"]} bg={colorMap[tag]["bg"]} p={2} fontSize="11px" fontWeight="500">{tag}</Tag>       
    )
};

export default BlogPostTag;
