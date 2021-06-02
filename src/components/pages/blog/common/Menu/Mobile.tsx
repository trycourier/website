import { Flex, Select } from '@chakra-ui/react';
import SearchButton from './SearchButton';

const Mobile = ({data}: {data: any[]}) => (
    <Flex p="0 20px" w={{base: "100%", md: "70%", lg: "60%"}} justify="flex-start" mb={4} float="right">
        <SearchButton mr={4} />
        <Select>
            {
                data.map(menu => (
                    <option value={menu.name} key={menu.name}>{menu.name}</option>
                ))
            }
        </Select>
    </Flex>        
);

export default Mobile;