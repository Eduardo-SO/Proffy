import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { 
  Container, 
  SearchTeachers, 
  InputBlock,
  Content
} from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <InputBlock>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </InputBlock>
          
          <InputBlock>
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </InputBlock>

          <InputBlock>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </InputBlock>
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