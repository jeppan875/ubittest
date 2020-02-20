import React from "react";
import styled, { keyframes } from "styled-components";
import { LoaderAlt } from "styled-icons/boxicons-regular/LoaderAlt";

import { colors } from "utils/cssMixins";

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Loader = styled(LoaderAlt)`
  align-self: center;
  width: 46px;
  height: 46px;
  margin-right: auto;
  margin-left: auto;
  color: ${colors.greys[3]};
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default () => <Loader />;
