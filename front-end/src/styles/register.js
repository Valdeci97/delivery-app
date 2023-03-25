import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 80vh;
  width: 100%;
`;

export const RegisterForm = styled.form`
  align-self: center;
  align-items: center;
  background-color: ${(props) => (props.isDarkMode ? '#ffffff20' : '#00000040')};
  border-radius: 1rem;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 80%;
  justify-content: center;
  width: 30%;

  @media screen and (max-width: 359px) {
    height: 100%;
    width: 80%;
  }

  @media screen and (min-width: 360px) and (max-width: 440px) {
    height: 70%;
    width: 80%;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    height: 75%;
    width: 80%;
  }

  @media screen and (min-width: 541px) and (max-width: 700px) {
    height: 75%;
    width: 50%;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    height: 75%;
    max-height: 500px;
    max-width: 350px;
    width: 50%;
  }
`;

export const Image = styled.img`
  align-self: center;
  height: 75%;

  @media screen and (max-width: 540px) {
    display: none;
  }

  @media screen and (min-width: 541px) and (max-width: 700px) {
    height: 40%;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    height: 50%;
  }
`;

export const Label = styled.label`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: large;
  font-weight: bold;
  gap: 0.5rem;
  width: 80%;

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isDarkMode ? '#4c2258' : '#43C76A')};
  border: solid 1px #ffffff20;
  border-radius: 1rem;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  height: 4rem;
  width: 80%;

  &:hover {
    cursor: pointer;
  }
`;

export const SelectRole = styled.select`
  background-color: #ffffff60;
  border: solid 1px #ffffff40;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 2rem;
  height: 4rem;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 440px) {
    font-size: 1.5rem;
  }
`;

export const RoleOption = styled.option`
  color: #000000;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 440px) {
    font-size: 1.5rem;
  }
`;

export const Pass = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 18%;
  transform: translate(50%, 15%);

  &:hover {
    cursor: pointer;
  }
`;

export const PassIcon = styled.img`
  width: 2.75rem;
`;
