import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: 10vh;
  margin-bottom: 20px;

  button {
    align-self: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  gap: 5rem;

  a {
    color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
  }

  @media screen and (max-width: 440px) {
    gap: 2rem;

    a {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    gap: 1.5rem;

    a {
      font-size: 1.75rem;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 720px) {
    gap: 1.5rem;

    a {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 721px) and (max-width: 1080px) {
    gap: 1.7    5rem;

    a {
      font-size: 1.75rem;
    }
  }
`;

export const RightSide = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

export const Title = styled.h1`
  align-self: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};;

  @media screen and (max-width: 720px) {
    display: none;
  }

  @media screen and (min-width: 721px) and (max-width: 1080px) {
    font-size: 1.75rem;
  }
`;

export const Logout = styled.button`
  align-items: center;
  background-color: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58aa')};
  border: solid 1px #ffffff40;
  border-radius: 0.5rem;
  color: #fff;
  display: flex;
  font-size: 2rem;
  height: 3.5rem;
  justify-content: center;
  padding: 0.5rem 0;
  width: 40%;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 360px) {
    margin-left: 2rem;
    width: 80%;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.5rem;
    height: 2.5rem;
    width: 90%;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    height: 2.5rem;
    width: 80%;
  }

  @media screen and (min-width: 541px) and (max-width: 720px) {
    height: 3rem;
    width: 75%;
  }

  @media screen and (min-width: 721px) and (max-width: 1080px) {
    height: 3rem;
    width: 40%;
  }
`;
