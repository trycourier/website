import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import searchIcon from "../../images/icon-search.svg";

const SearchInput = styled.div`
  ${tw`flex items-center justify-between rounded-full`}
  border: 1px solid #CBD5E0;

  & input[type=text]{
    ${tw`ml-3 text-sm`}
    border: none;
  }

  & img.search {
    ${tw`mr-2`}
  }
`;

const SearchInputComponent: React.FC = () => {
  return (
    <SearchInput>
      <input type="text" placeholder="Search" />
      <img className="search" src={searchIcon} alt="Search" />
    </SearchInput>
  );
};

export default SearchInputComponent;
