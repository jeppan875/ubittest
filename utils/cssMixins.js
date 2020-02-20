import { css } from "styled-components";
const sizes = {
  desktop: 1024,
  tablet: 745,
  mobile: 635
};
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const gutters = {
  pageGutter: "15px"
};

export const colors = {
  primary: "#090a3a",
  greys: [
    "#FAF9F9",
    "#DDDDDD",
    "#9B9B9B",
    "#979797",
    "#4a4a4a",
    "#333333",
    "#222222"
  ]
};
