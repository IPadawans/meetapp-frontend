import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 900px;
      height: 340px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }

    input {
      display: none;
    }
  }
`;

export const NoImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 340px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);

  p {
    margin-top: 20px;
    font-size: 20px;
    color: #999;
  }
`;
