import styled from 'styled-components';

export const Footer = styled.footer`
  align-items: center;
  bottom: 0;
  display: flex;
  height: 10vh;
  justify-content: space-around;
  width: 100%;
`;

export const LeftSide = styled.div`
  align-items: center;
  display: flex;
  font-size: 2rem;
  height: 100%;
  justify-content: center;
  width: 25%;
`;

export const LeftSideTitle = styled.span`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2rem;

  @media screen and (max-width: 360px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 361px) and (max-width: 540px) {
    font-size: 1.3rem;
  }

  @media screen and (min-width: 541px) and (max-width: 700px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const RightSide = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  width: 75%;
`;

export const GitLink = styled.a`
  display: flex;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  flex-direction: column;
  text-decoration: none;
  width: 20%;
`;

export const GitImage = styled.img`
  border-radius: 3rem;
  width: 20%;

  @media screen and (max-width: 440px) {
    display: none;
  }

  @media screen and (min-width: 441px) and (max-width: 700px) {
    width: 40%;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    width: 30%;
  }
`;

export const MemberName = styled.span`
  font-size: 1.25rem;

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    font-size: 1.25rem;
  }
`;
