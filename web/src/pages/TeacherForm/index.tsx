import React, { useState, useCallback, FormEvent } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Input from '../../components/Input';
import Select from '../../components/Select';

import warningIcon from '../../images/icons/warning.svg';

import { 
  Container,
  Content,
  Footer,
  ScheduleItem
 } from './styles';

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
  ])
  }, [scheduleItems]);

  const setScheduleItemValue = useCallback((
    position: number,
    field: string,
    value: string
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }, [scheduleItems])

  const handleCreateClass = useCallback((e: FormEvent) => {
    e.preventDefault();
    
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(response => {
      alert('Cadastro realizado com sucesso')
    }).catch(() => {
      alert('Erro no cadastro!')
    })
  }, [name, avatar, whatsapp, bio, subject, cost, scheduleItems]);

  return (
    <Container>
      <PageHeader
        title="Que incrivel que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Content>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              type="text"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />

            <Input
              name="avatar"
              label="Avatar"
              type="text"
              value={avatar}
              onChange={(e) => {setAvatar(e.target.value)}}
            />

            <Input
              name="whatsapp"
              label="Whatsapp"
              type="text"
              value={whatsapp}
              onChange={(e) => {setWhatsapp(e.target.value)}}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {setBio(e.target.value)}}
              />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => {setSubject(e.target.value)}}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Química', label: 'Química' },
                { value: 'Português', label: 'Português' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Física', label: 'Física' },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              type="text"
              value={cost}
              onChange={(e) => {setCost(e.target.value)}}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem key={scheduleItem.week_day}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={scheduleItem.week_day}
                  onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                />

                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                />
              </ScheduleItem>
            ))}
          </fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="Aviso importante!"/>
              Importante <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </Footer>
        </form>
      </Content>
    </Container>
  );
}

export default TeacherForm;