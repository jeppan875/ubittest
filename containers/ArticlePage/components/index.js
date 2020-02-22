import styled from "styled-components";
import { media, gutters } from "utils/cssMixins";
import { Avatar } from "./Avatar";

const Root = styled.article`
  margin: 20px 0;
  max-width: 650px;
  width: 100%;
  ${media.mobile`
    margin: 0;
  `}
`;

const Image = styled.img`
  margin: 0 ${gutters.pageGutter};
  width: 100%;
  ${media.mobile`
    margin: 0;
  `}
`;

const Content = styled.div`
  margin: 0 ${gutters.pageGutter};
  > * {
    margin-top: 10px;
  }
`;

const Title = styled.h1`
  margin: 20px 0;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  * + * {
    margin-left: 10px;
  }
`;

const Author = styled.span`
  font-size: 14px;
`;

const Text = styled.p`
  max-height: 25px;
  padding-bottom: 20px;
`;

export default ({ article }) => {
  const { title, imgurl, createdAt, text, slug, authorImg, author } = article;
  return (
    <Root>
      <Image src={imgurl} />
      <Content>
        <Title>{title}</Title>
        <AuthorWrapper>
          <Avatar src={authorImg} />
          <Author>{author}</Author>
        </AuthorWrapper>
        <Text>{text}</Text>
      </Content>
    </Root>
  );
};
