import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchButton = ({...other}) => (
    <InputGroup mb={"22px"} {...other}>
        <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
        />
        <Input placeholder="Search" />
    </InputGroup> 
);

export default SearchButton;