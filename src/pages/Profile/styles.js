import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
  }
`;

export const SaveProfile = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;

  background: #000;
  border: 0px;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;
  width: 180px;

  span {
    margin-left: 10px !important;
    color: #fff !important;
    padding-top: 10px;
  }

  &:hover {
    background: ${lighten(0.03, '#000')};
  }
`;
