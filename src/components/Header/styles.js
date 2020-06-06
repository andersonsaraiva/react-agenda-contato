import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  background: #f15624;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 99;
`;

export const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img.logo {
    max-width: 250px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;
