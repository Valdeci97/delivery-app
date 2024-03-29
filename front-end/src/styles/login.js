import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  justify-content: space-evenly;
  width: 100%;
`;

export const Logo = styled.img`
  align-self: center;
  height: 75%;

  @media screen and (max-width: 540px) {
    display: none;
  }

  @media screen and (min-width: 541px) and (max-width: 700px) {
    height: 45%;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    height: 47.5%;
  }
`;

export const Form = styled.form`
  align-items: center;
  align-self: center;
  background-color: ${(props) => (props.isDarkMode ? '#ffffff20' : '#00000040')};
  backdrop-filter: blur(10rem);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  height: 60%;
  width: 30%;

  @media screen and (max-width: 360px) {
    height: 70%;
    width: 80%;
  }

  @media screen and (min-width: 361px) and (max-width: 540px) {
    height: 60%;
    width: 80%;
  }

  @media screen and (min-width: 541px) and (max-width: 700px) {
    height: 50%;
    width: 40%;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    height: 55%;
    width: 45%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;

  @media screen and (min-width: 541px) and (max-width: 700px) {
    font-size: 1.75rem;
  }
`;

export const LoginButton = styled.button`
  background-color: ${(props) => (props.isDarkMode ? '#4c2258' : '#43C76A')};
  border: solid 1px #ffffff20;
  border-radius: 1rem;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  height: 4rem;
  margin-top: 1rem;
  width: 80%;

  &:hover {
    cursor: pointer;
  }
`;

export const RevealPassword = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 15%;
  transform: translate(50%, 15%);

  &:hover {
    cursor: pointer;
  }
`;

export const RevealPasswordIcon = styled.img`
  width: 2.75rem;
`;
