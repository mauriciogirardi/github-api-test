import styled from 'styled-components';

export const Fixed = styled.header`
  background-color: ${props => props.theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 74px;
  height: 100vh;
  padding: 20px 0;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  img {
    width: 60px;
  }
`;
