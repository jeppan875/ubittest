import Link from "next/link";
import styled from "styled-components";
import { media, colors, gutters } from "utils/cssMixins";

const Root = styled.div`
  max-width: 350px;
  width: 100%;
  cursor: pointer;
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
  transform: scale(1.01);
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 3;
  padding: 10px;
  overflow: hidden;
`;

const Relative = styled.div`
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

const Title = styled.h3`
  margin: 0 0 10px 0;
`;

const Fade = styled.div`
  content: "";
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  height: 6em;
`;

const FadeText = styled.div`
  content: "";
  box-sizing: border-box;
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  height: 1em;
`;

const Text = styled.p`
  max-height: 25px;
  word-break: break-all;
`;

export default ({ article }) => {
  const { title, imgurl, createdAt, text, slug } = article;
  return (
    <Root>
      <Link href={`/article/[slug]`} as={`/article/${slug}`} passHref>
        <SimpleLink>
          <Relative>
            <Image src={imgurl} />
            <Content>
              <Title>{title}</Title>
              <Text>{text}</Text>
              <FadeText />
            </Content>
            <Fade />
          </Relative>
        </SimpleLink>
      </Link>
    </Root>
  );
};
