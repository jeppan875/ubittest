import Link from "next/link";
import styled from "styled-components";
import { media, colors, gutters } from "utils/cssMixins";

const Headear = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.primary};
  color: white;
  height: 50px;
  width: 100%;
  top: 0px;
  position: fixed;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  ${media.mobile`
   max-width: 100%;
   margin-right: 0px;
`}
`;

const SimpleLink = styled.a`
  text-decoration: none;
  &:focus {
    outline: none;
  }
`;

const HeaderText = styled.h2`
  color: white;
  margin-left: ${gutters.pageGutter};
`;

export default () => {
  return (
    <Headear>
      <Wrapper>
        <Link href={`/`} passHref>
          <SimpleLink>
            <HeaderText>UBIT Test</HeaderText>
          </SimpleLink>
        </Link>
      </Wrapper>
    </Headear>
  );
};
