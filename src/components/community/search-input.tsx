import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

import searchIcon from "../../images/icon-search.svg";

const SearchInput = styled.div`
  ${tw`flex items-center justify-between rounded-full`}
  border: 1px solid #CBD5E0;

  & input[type="text"] {
    ${tw`ml-3 text-sm`}
    border: none;
    outline: none;
    width: 100%;
    &::focus {
      outline: none;
    }
  }

  & img.search {
    ${tw`mr-2`}
  }
`;

type SearchTypes = {
  onSearch: React.FormEvent;
};

const SearchInputComponent: React.FC<SearchTypes> = ({ onSearch }) => {
  return (
    <SearchInput>
      <input type="text" placeholder="Search" onChange={onSearch} />
      <img className="search" src={searchIcon} alt="Search" />
    </SearchInput>
  );
};

export default SearchInputComponent;
