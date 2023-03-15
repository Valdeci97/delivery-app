import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58')};
  border: solid 1px #ffffff40;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 2rem;
  height: 5rem;
  margin-bottom: 1rem;
  width: 25rem;

  span {
    font-size: 2rem;
  }

  @media screen and (max-width: 720px) {
    position: fixed;
    bottom: 0;
  }

  @media screen and (max-width: 440px) {
    height: 3rem;
    margin-bottom: 0.5rem;
    width: 85%;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    height: 3rem;
    margin-bottom: 0.5rem;
    width: 80%;
  }

  @media screen and (min-width: 541px) and (max-width: 720px) {
    font-size: 20px;
    height: 3rem;
    margin-bottom: 0;
    width: 60%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
