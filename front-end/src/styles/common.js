import styled from 'styled-components';

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

export const Select = styled.select`
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

export const Option = styled.option`
  color: #000000;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 440px) {
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

  @media screen and (max-width: 440px) {
    width: 7.5%;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    width: 7.5%;
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

  @media screen and (max-width: 440px) {
    width: 92.5%;
    font-size: 1rem;

    &::placeholder {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 700px) {
    font-size: 1rem;

    &&::placeholder {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    font-size: 1.5rem;
    width: 92.5%;

    &&::placeholder {
      font-size: 1.5rem;
    }
  }
`;
