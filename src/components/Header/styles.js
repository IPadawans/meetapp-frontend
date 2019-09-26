import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 90px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      justify-content: center;
      align-items: center;

      img {
        justify-content: center;
        align-items: center;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      background: #009900;
      border: 0;
      margin: 0;
      border-radius: 4px;
      padding: 12px 20px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
