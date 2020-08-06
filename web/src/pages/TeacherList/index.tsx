import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import { 
  Container, 
  SearchTeachers, 
  Content
} from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <Input name="subject" label="Matéria" type="text" />
          <Input name="week_day" label="Dia da semana" type="text" />
          <Input name="time" label="Hora" type="time" />
        </SearchTeachers>
      </PageHeader>
      <Content>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Content>
    </Container>
  );
}

export default TeacherList;