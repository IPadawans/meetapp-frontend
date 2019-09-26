import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #fff;
    }
  }

  img {
    width: 900px;
    height: 340px;
    margin-top: 40px;
    border-radius: 4px;
  }

  p {
    overflow-wrap: break-word;
    margin-top: 20px;
    color: #fff;
    font-size: 16px;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const EditMeetup = styled.button`
  margin-right: 15px;
  border: 0;
  padding: 10px 20px;
  background: #4dbaf9;
  color: #fff;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CancelMeetup = styled.button`
  border: 0;
  padding: 10px 20px;
  background: #e5556e;
  color: #fff;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MeetupDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 25px 0 10px;
    color: #999;
  }
`;

export const MeetupLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 0 0 10px;
    color: #999;
  }
`;
