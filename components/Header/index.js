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
  ${media.mobile`
      height: 45px;
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
  margin-left: ${gutters.desktop};
  ${media.mobile`
    margin-left: ${gutters.mobile};
  `}
`;

export default () => {
  return (
    <Headear>
      <Link href={`/`} passHref>
        <SimpleLink>
          <HeaderText>UBIT Test</HeaderText>
        </SimpleLink>
      </Link>
    </Headear>
  );
};
