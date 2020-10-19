import styled from 'styled-components';

export const HeaderLink = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #a8a8b3;
    transition: color 0.2s;

    svg {
      margin-right: 4px;
    }

    &:hover {
      color: #666;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
      }

      p {
        color: ${props => props.theme.colors.title_secundary};
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    margin-top: 40px;

    li {


      & + li {
        margin-left: 80px;
      }

      strong {
        font-size: 36px;
      }

      span {
        color: ${props => props.theme.colors.title_secundary};
        display: block;
        margin-top: 4px;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;

  a {
    background: ${props => props.theme.colors.white};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
      }

      p {
        font-size: 18px;
        color: ${props => props.theme.colors.title_secundary};
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: ${props => props.theme.colors.title_secundary};
    }
  }
`;
