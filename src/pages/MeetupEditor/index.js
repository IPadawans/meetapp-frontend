import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';
import AvatarInput from './AvatarInput';

import {
  updateMeetupRequest,
  createMeetupRequest,
} from '~/store/modules/meetup/actions';

import { Container, SaveMeetup } from './styles';

export default function MeeetupEditor({ match }) {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);
  const { url } = match;
  const { id } = match.params;
  const isEditUrl = url.includes('edit');

  if (isEditUrl && !id) {
    toast.error(
      'Não foi informado um ID de Meetup para edição, prosseguindo para criação de novo'
    );
    return <Redirect to="/meetup/new" />;
  }

  const meetup = meetups.find(meet => String(meet.id) === id);
  if (!meetup && isEditUrl) {
    toast.error(
      'Não foi encontrado um meetup com o id informado, prosseguindo para criação de novo'
    );
    return <Redirect to="/meetup/new" />;
  }

  const initialData = meetup || {};

  function handleMeetupSave(data) {
    dispatch(
      isEditUrl ? updateMeetupRequest(data, id) : createMeetupRequest(data)
    );
  }

  return (
    <Container>
      <Form initialData={initialData} onSubmit={handleMeetupSave}>
        <AvatarInput name="file_id" />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          type="text"
          placeholder="Descrição do Meetup"
        />
        <Input
          name="date"
          type="datetime-local"
          placeholder="Data do Meetup: "
        />
        <Input name="location" type="text" placeholder="Localização" />
        <SaveMeetup type="submit">
          <MdAddCircleOutline size={24} color="#FFF" />
          <span>Salvar meetup</span>
        </SaveMeetup>
      </Form>
    </Container>
  );
}

MeeetupEditor.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

MeeetupEditor.defaultProps = {
  match: {},
};
