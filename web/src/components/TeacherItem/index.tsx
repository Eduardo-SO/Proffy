import React, { useCallback } from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import {
  Container,
  ItemHeader,
  ItemFooter
} from './styles';

export interface Teacher {
  id: number,
  subject: string,
  cost: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string
}

interface TeacherItemProps {
  teacher: Teacher,
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = useCallback(() => {
    api.post('connections', {
      user_id: teacher.id,
    })
  }, [teacher.id]);

  return (
    <Container>
      <ItemHeader>
        <img src={teacher.avatar} alt={teacher.name}/>

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </ItemHeader>

      <p>{teacher.bio}</p>

      <ItemFooter>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a 
          onClick={createNewConnection} 
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </ItemFooter>
    </Container>
  );
}

export default TeacherItem;