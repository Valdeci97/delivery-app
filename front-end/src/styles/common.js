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

export const InputIconContainer = styled.div`
  background: #ffffff30;
  display: flex;
  width: 10%;
`;

export const InputIcon = styled.img`
  width: 90%;
`;

export const Input = styled.input`
  background-color: #ffffff30;
  border: none;
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  height: 4rem;
  padding: 1rem;
  width: 90%;

  &::placeholder {
    color: #fff;
    font-size: 1.75rem;
    text-align: justify;
    text-justify: auto;
  }

  @media screen and (max-width: 440px) {
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

    &&::placeholder {
      font-size: 1.5rem;
    }
  }
`;

export const Pass = styled.button`
  align-self: center;
  background-color: #ffffff30;
  border: none;
  height: 4rem;
  width: 10%;

  &:hover {
    cursor: pointer;
  }
`;

export const PassIcon = styled.img`
  height: 100%;
  width: 90%;
`;
