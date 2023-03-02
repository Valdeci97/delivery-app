import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  display: flex;
  font-size: 4rem;
  height: 10vh;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 360px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 541px) and (max-width: 700px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.alignBetween ? 'space-between' : 'end')};
  width: 20%;

  @media screen and (max-width: 540px) {
    width: 50%;
  }

  @media screen and (min-width: 541px) and (max-width: 1000px) {
    width: 30%;
  }
`;

export const RegisterButton = styled.button`
  background-color: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58aa')};
  border: solid 1px #ffffff40;
  border-radius: 0.5rem;
  color: #fff;
  width: 60%;

  &:hover {
    cursor: pointer;
  }
`;

export const RegisterLink = styled.a`
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
`;
