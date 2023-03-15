import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: ${(props) => (props.isDarkMode ? '#7D4F7D90' : '#34AD5880')};
  border: solid 1px #ffffff40;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 30rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 30%;

  @media screen and (max-width: 440px) {
    height: 25rem;
    padding: 1.5rem 0;
    width: 90%;
  }
  
  @media screen and (min-width: 441px) and (max-width: 540px) {
    height: 30rem;
    width: 90%;
  }

  @media screen and (min-width: 541px) and (max-width: 720px) {
    height: 25rem;
    width: 45%;
  }

  @media screen and (min-width: 721px) and (max-width: 840px) {
    height: 27.5rem;
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Img = styled.img`
  border-radius: 0.5rem;
  height: 12.5rem;
  margin-bottom: 0.5rem;
  width: 15rem;

  @media screen and (max-width: 440px) {
    height: 50%;
    width: 50%;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    height: 50%;
    width: 40%;
  }

  @media screen and (min-width: 541px) and (max-width: 840px) {
    height: 40%;
    width: 50%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Description = styled.span`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 440px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 2.5rem;
  }
`;

export const Currency = styled.p`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2rem;

  span {
    font-size: 2rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 2.5rem;

    span {
      font-size: 2.5rem;
    }
  }
`;

export const CartButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  width: 60%;

  @media screen and (min-width: 441px) and (max-width: 540px) {
    width: 50%;
  }
`;

export const SeeCartButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
`;

export const CartQuantityButton = styled.button`
  background: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58aa')};
  border: solid 1px #ffffff40;
  border-radius: 0.75rem;
  color: #fff;
  font-size: 2.5rem;
  height: 3.5rem;
  text-align: center;
  width: 3.5rem;

  @media screen and (max-width: 540px) {
    font-size: 2rem;
    height: 3rem;
    width: 3rem;
  }

  @media screen and (min-width: 541px) and (max-width: 720px) {
    height: 3.25rem;
    width: 3.25rem;
  }
`;

export const ProductQuantity = styled.input`
  background-color: #ffffff80;
  border: solid 1px #ffffff90;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  height: 2.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 60%;

  @media screen and (min-width: 441px) and (max-width: 540px) {
    width: 50%;
  }

  @media screen and (min-width: 541px) and (max-width: 720px) {
    width: 60%;
  }   
`;

export const ProductSection = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;
