import styled from "styled-components";
import { media, gutters } from "utils/cssMixins";

const StyledWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;

  ${media.mobile`
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
    `}
  margin-top: 50px;
  margin-bottom: 100px;
`;

export default ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
