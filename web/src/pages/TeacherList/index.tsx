import React, { useState, useCallback, FormEvent } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, SearchTeachers, Content } from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const response = await api.get('classes', {
        params: {
          subject,
          week_day: weekDay,
          time,
        },
      });

      setTeachers(response.data);
    },
    [subject, time, weekDay],
  );

  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Química', label: 'Química' },
              { value: 'Português', label: 'Português' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Física', label: 'Física' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={weekDay}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </SearchTeachers>
      </PageHeader>
      <Content>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Content>
    </Container>
  );
};

export default TeacherList;
