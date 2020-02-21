import styled from "styled-components";
import { media, gutters } from "utils/cssMixins";

const Root = styled.article`
  margin-top: 20px;
  max-width: 650px;
  width: 100%;
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
`;

const Title = styled.h1`
  margin: 10px 0;
`;

const Text = styled.p`
  max-height: 25px;
  word-break: break-all;
`;

export default ({ article }) => {
  const { title, imgurl, createdAt, text, slug } = article;
  return (
    <Root>
      <Image src={imgurl} />
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Root>
  );
};
