export const ArticleScreen = styled.div`
  ${tw`flex`}
`;

export const ArticleList = styled.div`
  ${tw`w-3/4 mr-16`}
`;

export const ArticleSearch = styled.div`
  ${tw`w-1/4`}
`;

export const ArticleCard = styled.div`
  ${tw`w-full flex my-8`}
  & h4 {
    font-size: 22px;
    font-weight: 400;
    color: ${colors.textPrimary};
    margin: 0;
  }
  & div.posted {
    font-size: 14px;
    padding-top: 8px;
    & strong {
      color: ${colors.textPrimary};
    }
  }
  & p.excerpt {
    font-size: 14px;
    color: ${colors.textPrimary};
  }
`;

export const ArticleImage = styled.img`
  ${tw`w-1/6 flex mr-4`}
  border-radius: 10px;
  min-width: 220px;
`;