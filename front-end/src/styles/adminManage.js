import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 360px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.4rem;
  }
`;

export const Form = styled.form`
  align-self: center;
  align-items: center;
  background-color: ${(props) => (props.isDarkMode ? '#ffffff20' : '#00000040')};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0;
  width: 35%;

  @media screen and (max-width: 540px) {
    width: 80%;
  }

  @media screen and (min-width: 541px) and (max-width: 800px) {
    width: 65%;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    width: 50%;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58aa')};
  border: solid 1px #ffffff60;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  padding: 0.5rem;
  width: 50%;

  @media screen and (max-width: 360px) {
    font-size: 1.25rem;
    width: 40%;
  }
`;
