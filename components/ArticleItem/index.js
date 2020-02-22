import Link from "next/link";
import styled from "styled-components";
import { media, colors } from "utils/cssMixins";

const Root = styled.div`
  max-width: 350px;
  width: 100%;
  cursor: pointer;
  ${media.mobile`
    max-width: 500px;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SimpleLink = styled.a`
  text-decoration: none;
  &:focus {
    outline: none;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 350px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  ${media.tablet`
    max-height: 300px;
  `}
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

const Content = styled.div`
  align-self: center;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  width: 90%;
  background: ${colors.greys[2]};
  color: black;
  z-index: 3;
  padding: 10px;
  overflow: hidden;
`;

const Title = styled.h3`
  margin: 0;
`;

export default ({ article }) => {
  const { title, imgurl, slug } = article;
  return (
    <Root>
      <Link href={`/article/[slug]`} as={`/article/${slug}`} passHref>
        <SimpleLink>
          <ContentWrapper>
            <Image src={imgurl} />
            <Content>
              <Title>{title}</Title>
            </Content>
          </ContentWrapper>
        </SimpleLink>
      </Link>
    </Root>
  );
};
