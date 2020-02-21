import styled from "styled-components";
import { media } from "utils/cssMixins";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;

  ${media.mobile`
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
    `}
  margin-bottom: 100px;
`;

export default ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
