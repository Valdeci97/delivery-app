import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  justify-content: space-around;
`;

export const Label = styled.label`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 440px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.25rem;
  }

  @media(min-width: 681px) and (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

export const Select = styled.select`
  align-self: center;
  background-color: ${(props) => (props.isDarkMode ? 'transparent' : '#ffffffcc')};
  border: solid 1px #ffffff60;
  border-radius: 0.5rem;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2rem;
  font-weight: 500;
  height: 4rem;
  margin-top: 0.5rem;
  text-align: center;   
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 360px) {
    font-size: 1rem;
    height: 2rem;
    width: 80%;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.2rem;
    height: 2rem;
    width: 80%;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.25rem;
    height: 2.5rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.4rem;
    height: 3rem;
  }

  @media(min-width: 681px) and (max-width: 800px) {
    font-size: 0.8rem;
    height: 1.2rem;
    width: 6.75rem;
  }
`;

export const Input = styled.input`
  align-self: center;
  background-color: ${(props) => (props.isDarkMode ? 'transparent' : '#ffffffcc')};
  border: solid 1px #ffffff60;
  border-radius: 0.5rem;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2rem;
  height: 4rem;
  margin-top: 0.5rem;
  text-align: center;
  width: 100%;

  &::placeholder {
    color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
    font-size: 2rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1rem;
    height: 2rem;
    width: 80%;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.2rem;
    height: 2rem;
    width: 80%;

    &::placeholder {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.25rem;
    height: 2.5rem;

    &::placeholder {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.4rem;
    height: 3rem;

    &::placeholder {
      font-size: 1.4rem;
    }
  }

  @media(min-width: 681px) and (max-width: 800px) {
    font-size: 0.75rem;
    height: 1.15rem;
    width: 7rem;

    &::placeholder {
      font-size: 0.6rem;
    }
  }

  @media(min-width: 801px) and (max-width: 1000px) {
    font-size: 0.9rem;
    height: 1.2rem;
    width: 7.75rem;

    &::placeholder {
      font-size: 0.7rem;
    }
  }
`;

export const FinishOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const FinishOrderButton = styled.button`
  background-color: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58aa')};
  border: solid 1px #ffffff60;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 2rem;
  height: 4rem;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 360px) {
    font-size: 1rem;
    height: 2.25rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.25rem;
    height: 2.5rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.5rem;
    height: 2.75rem;
  }
`;
