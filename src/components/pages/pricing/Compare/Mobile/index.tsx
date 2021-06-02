import { Box } from '@chakra-ui/react';
import Tables from './Tables';

const CompareMobile = () => (
    <Box display={{base: "block", lg: "none"}} p="0 20px">
        <Tables />   
    </Box>     
);

export default CompareMobile;