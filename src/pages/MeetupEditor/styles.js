import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  height: 100%;
  form {
    display: flex;
    flex-direction: column;

    img {
      width: 900px;
      height: 340px;
      margin-top: 20px;
      border-radius: 4px;
    }

    input,
    textarea {
      margin-top: 20px;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      padding: 20px;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      overflow-wrap: break-word;

      &::placeholder {
        color: #fff;
      }
    }
    input[type='datetime-local']:before {
      content: attr(placeholder) !important;
      color: #999;
      margin-right: 0.5em;
    }

    textarea {
      padding-bottom: 100px;
    }
  }

  span {
    margin-top: 5px;
    color: red;
    align-self: center;
  }
`;

export const SaveMeetup = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;

  background: #000;
  border: 0px;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  margin: 40px 0px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;
  width: 180px;

  span {
    margin-left: 10px !important;
    color: #fff !important;
  }

  &:hover {
    background: ${lighten(0.03, '#000')};
  }
`;
