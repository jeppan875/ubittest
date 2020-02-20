import styled from "styled-components";

const Error = styled.div`
  align-self: center;
`;

export default ({ errMsg = "Seomthing went wrong, Try reload page." }) => {
  return <Error>{errMsg}</Error>;
};
