import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const Shop = ({ data }) => {
  console.log(data);
  return <StyledContainer />;
};

export default Shop;
