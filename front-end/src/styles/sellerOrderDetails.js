import styled from 'styled-components';

export const Details = styled.h1`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2rem;
  margin-left: 2rem;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 440px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.3rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media(min-width: 801px) and (max-width: 1000px) {
    font-size: 1.75rem;
  }
`;

export const OrderContainer = styled.div`
  align-items: center;
  border: solid 1px ${(props) => (props.isDarkMode ? '#ffffff90' : '#000')};
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0.25rem 0.1rem ${(props) => (props.isDarkMode ? '#ffffff60' : '#00000060')};
  display: flex;
  justify-content: space-around;
  margin-left: 2rem;
  width: 90%;
`;

export const LeftSide = styled.div`
  align-self: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  text-align: center;

  span {
    color: ${(props) => (props.isDarkMode ? '#fff' : '#000')}
  }
`;

export const SellerOrderSpan = styled.span`
  font-size: 2.25rem;

  @media screen and (max-width: 440px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58aa')};
  border: solid 1px ${(props) => (props.isDarkMode ? '#ffffff60' : '#00000060')};
  border-radius: 0.25rem;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  cursor: pointer;
  font-size: 2rem;
  padding: 0.5rem;
  width: 25rem;

  &:disabled {
    font-size: 0;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }

  &:disabled::after {
    font-size: 2rem;
  }

  @media screen and (max-width: 440px) {
    font-size: 0.8rem;
    width: 6rem;

    &:disabled::after {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1rem;
    width: 8rem;

    &:disabled::after {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.25rem;
    width: 10rem;

    &:disabled::after {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 1.5rem;
    width: 15rem;

    &:disabled::after {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: 1.75rem;
    margin-left: 0.25rem;
    width: 22rem;

    &:disabled::after {
      font-size: 1.75rem;
    }
  }
`;

export const StartOrderButton = styled(Button)`
  &:disabled::after {
    content: 'PREPARO INICIADO';
  }
`;

export const DeliveryOrderButton = styled(Button)`
  margin-bottom: 0.75rem;
  
  &:disabled::after {
    content: '${(props) => props.content}';
  }
`;

export const Table = styled.table`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 7.5rem;
  text-align: center;
  width: 55%;

  @media screen and (max-width: 440px) {
    font-size: 3.25rem;
    width: 60%;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 3.75rem;
    width: 60%;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 4.5rem;
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 5.5rem;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: 6.25rem;
    width: 65%;
  }
`;

export const Price = styled.span`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2rem;

  @media screen and (max-width: 440px) {
    font-size: 0.7rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: 1.75rem;
  }
`;
