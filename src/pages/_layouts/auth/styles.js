import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(#4169e1, #87ceeb);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin-bottom: 15px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      background: #000;
      border: 0px;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.03, '#000')};
      }
    }

    a {
      margin-top: 10px;
      color: #eee;
      font-size: 14px;
      transition: color 0.2s;
      opacity: 0.8;

      &:hover {
        color: ${darken(0.3, '#eee')};
      }
    }
  }
`;
