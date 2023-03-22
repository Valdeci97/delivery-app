import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Link = styled.a`
  align-items: center;
  border: solid 1px ${(props) => (props.isDarkMode ? '#ffffff90' : '#000')};
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0.25rem 0.1rem ${(props) => (props.isDarkMode ? '#ffffff60' : '#00000060')};
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  display: flex;
  font-weight: bold;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  padding: 1rem 0;
  text-align: center;
  text-decoration: none;
  width: 90%;
`;

export const OrderTextSpan = styled.span`
  font-size: 2.5rem;

  @media screen and (max-width: 440px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: 2.25rem;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;

  @media screen and (max-width: 680px) {
    justify-content: space-evenly;
    width: 50%;
  }

  @media screen and (min-width: 681px) and (max-width: 1000px) {
    width: 40%;
  }
`;
