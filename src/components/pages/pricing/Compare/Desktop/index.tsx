import { Box } from "@chakra-ui/react"
import Table from './Table';
import Header from './Header';

const Compare = () => (
    <Box mt={{base: "62px", lg: '92px'}} maxW={1200} mx='auto' padding='0 20px' display={{base: "none", lg: "block"}}>
        <Header />
        <Table />
    </Box>   
);

export default Compare;