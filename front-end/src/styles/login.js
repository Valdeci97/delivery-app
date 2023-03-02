import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #5213A4; // 8,2 p2 */
  /* background-color: #7D4F7D; // 7,8 p1 */
  /* background-color: #081F20; // 9,0 p3 */
  /* background-color: #BB97D8; // 4,2 p1+ */
  /* background-color: #9E6BC7; //  p1+ */
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
    height: 50%;
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

export const Label = styled.label`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: large;
  font-weight: bold;
  gap: 0.5rem;
  width: 80%;

  @media screen and (min-width: 541px) and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const InputContainer = styled.div`
  background-color: #ffffff30;
  border: solid 1px #ffffff40;
  border-radius: 0.5rem;
  display: flex;
  width: 100%;
`;

export const InputIcon = styled.img`
  background-color: #ffffff30;
  width: 5%;

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    width: 10%;
  }
`;

export const Input = styled.input`
  background-color: #ffffff30;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  height: 4rem;
  padding: 1rem;
  width: 95%;

  &::placeholder {
    color: #fff;
    font-size: 1.75rem;
    text-align: justify;
    text-justify: auto;
  }

  @media screen and (min-width: 541px) and (max-width: 700px) {
    font-size: 1rem;
    width: 90%;

    &&::placeholder {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    font-size: 1.5rem;
    width: 90%;

    &&::placeholder {
      font-size: 1.5rem;
    }
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
