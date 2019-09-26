import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';
import history from '~/services/history';

import { listUsersMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, NewMeetup, MeetupList, Meetup, Scroll } from './styles';

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetups() {
      dispatch(listUsersMeetupRequest());
    }
    loadMeetups();
    // eslint-disable-next-line
  }, []);

  const meetups = useSelector(state => state.meetup.meetups);

  function handleDetail(id) {
    history.push(`/meetup/${id}/detail`);
  }

  function handleNewMeetup() {
    history.push('meetup/new');
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <NewMeetup type="button" onClick={handleNewMeetup}>
          <MdAddCircleOutline size={24} color="#FFF" />
          <span>Novo meetup</span>
        </NewMeetup>
      </header>

      <MeetupList>
        <Scroll>
          {meetups.map(meetup => (
            <Meetup
              key={String(meetup.id)}
              type="button"
              onClick={() => handleDetail(meetup.id)}
            >
              <span>{meetup.title}</span>
              <aside>
                <span>{meetup.dateFormatted}</span>
                <MdKeyboardArrowRight size={24} color="#FFF" />
              </aside>
            </Meetup>
          ))}
        </Scroll>
      </MeetupList>
    </Container>
  );
}
export default Dashboard;
