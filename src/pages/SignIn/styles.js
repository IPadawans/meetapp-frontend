import styled, { keyframes, css } from 'styled-components';
import { lighten } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
`;

export const SignButton = styled.button`
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

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
