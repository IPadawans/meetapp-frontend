import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const NewMeetup = styled.button`
  display: flex;
  align-items: center;
  background: #000;
  border: 0;
  margin: 0;
  border-radius: 4px;
  padding: 10px 25px;

  span {
    color: #fff;
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const MeetupList = styled.div`
  margin-top: 30px;
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 700px;
`;

export const Meetup = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 900px;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px 0;
  border: 0;
  margin: 0px 0px 10px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    font-size: 25px;
    padding: 40px;
  }

  > span {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
  }

  aside {
    display: flex;
    align-items: center;
    align-self: center;

    > span {
      color: #999;
      font-size: 14px;
      margin-right: 20px;
    }

    svg {
      margin-right: 20px;
    }
  }
`;
