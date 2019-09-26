import React from 'react';

import { useSelector } from 'react-redux';

import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '~/services/history';

import {
  Container,
  Actions,
  EditMeetup,
  CancelMeetup,
  MeetupDate,
  MeetupLocation,
} from './styles';
import api from '~/services/api';

export default function Detail({ match }) {
  async function handleDeleteMeetup(id) {
    try {
      await api.delete(`/meetups/${id}`);
      toast.success('Meetup removido com sucesso');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Houve uuma falha ao remover o Meetup');
    }
  }

  function handleEditMeetup(id) {
    history.push(`/meetup/${id}/edit`);
  }

  try {
    const meetups = useSelector(state => state.meetup.meetups);
    const { id } = match.params;
    const meetup = meetups.find(meet => String(meet.id) === id);

    const { File: file } = meetup;

    return (
      <Container>
        <header>
          <h1>{meetup.title}</h1>
          <Actions>
            <EditMeetup
              type="button"
              onClick={() => handleEditMeetup(meetup.id)}
            >
              <MdEdit size={24} color="#fff" />
              <span>Editar</span>
            </EditMeetup>

            <CancelMeetup
              type="button"
              onClick={() => handleDeleteMeetup(meetup.id)}
            >
              <MdDeleteForever size={24} color="#fff" />
              <span>Apagar</span>
            </CancelMeetup>
          </Actions>
        </header>
        <img src={file.url} alt="Meetup" />
        <p>{meetup.description}</p>
        <br />
        <footer>
          <MeetupDate>
            <MdEvent size={24} color="#999" />
            <span>{meetup.dateFormatted}</span>
          </MeetupDate>

          <MeetupLocation>
            <MdLocationOn size={24} color="#999" />
            <span>{meetup.location}</span>
          </MeetupLocation>
        </footer>
      </Container>
    );
  } catch (err) {
    toast.error(
      'Não foi possível exibir os dados pois não foi encontrado Meetup a detalhar!'
    );
    return <Redirect to="/dashboard" />;
  }
}

Detail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf.isRequired,
  }),
};

Detail.defaultProps = {
  location: {},
};
