import styled from "styled-components";
import { media, gutters } from "utils/cssMixins";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-left: ${gutters.desktop};
  margin-right: ${gutters.desktop};
  max-width: 900px;
  ${media.mobile`
        width: 100%;
        margin-left: ${gutters.mobile};
        margin-right: ${gutters.mobile};
    `}
  margin-top: 60px;
  margin-bottom: 100px;
`;

export default ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
