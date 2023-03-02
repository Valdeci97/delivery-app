import styled from 'styled-components';

export const Container = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 80vh;
  justify-content: center;
  width: 100%;
`;

export const LabelContainer = styled.div`
  align-items: center;
  /* background-color: #7792E490; */
  background-color: #00649410;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  width: 50%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  text-align: center;
`;

export const Input = styled.input`
  border: solid 1px black;
  border-radius: 4px;
  height: 30px;
  margin-top: 5px;
  text-align: center;
`;

export const Button = styled.button`
  background: #23022e;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  height: 30px;
  margin-top: 20px;
  width: 150px;

  &:hover {
    cursor: pointer;
    font-size: 20px;
    height: 40px;
    transition: all 0.5s ease-in;
    width: 200px;
  }
`;

export const RevealPassword = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  margin-right: 10px;
  margin-top: -22.5px;

  &:hover {
    cursor: pointer;
  }
`;

export const SelectRole = styled.select`
  background-color: blue;
`;

export const RoleOption = styled.option`
  background-color: red;
`;
