import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
`;

export const Table = styled.table`
  border: solid 1px ${(props) => (props.isDarkMode ? '#ffffff90' : '#000')};
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0.25rem 0.1rem ${(props) => (props.isDarkMode ? '#ffffff60' : '#00000060')};
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 10rem;
  margin-bottom: 1rem;
  text-align: center;
  width: 90%;

  @media screen and (max-width: 360px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 5rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 5.75rem;
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 6.5rem;
  }

  @media(min-width: 801px) and (max-width: 1000px) {
    font-size: 7.5rem;
  }
`;

export const DeleteUserButton = styled.button`
  background-color: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58aa')};
  border: solid 1px #ffffff60;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  height: 4rem;
  margin-bottom: 0.5rem;
  width: 80%;

  @media screen and (max-width: 360px) {
    font-size: 1rem;
    height: 2rem;
    width: 100%;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.2rem;
    height: 2.25rem;
    width: 100%;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.25rem;
    height: 3rem;
    width: 100%;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.5rem;
    width: 100%;
  }

  @media(min-width: 681px) and (max-width: 800px) {
    font-size: 1.75rem;
    width: 90%;
  }
`;
