import Link from "next/link";
import styled from "styled-components";
import { media, colors, gutters } from "utils/cssMixins";

const Root = styled.div`
  max-width: 350px;
  background-color: white;
  width: 100%;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
`;

const Image = styled.img`
  width: 100%;
  max-height: 350px;
  ${media.tablet`
    max-height: 300px;
  `}
`;

const Content = styled.div`
  margin-left: 20px;
  ${media.mobile`
    margin-left: 5px;
  `}
`;

const Text = styled.p``;

export default ({ article }) => {
  const { title, imgurl, createdAt, text, slug } = article;
  return (
    <Root>
      <Image src={imgurl} />
      <Content>
        <h3>{title}</h3>
        <Text>{text}</Text>
      </Content>
    </Root>
  );
};
