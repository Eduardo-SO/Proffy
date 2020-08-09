import React, { useState, useCallback } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { 
  Container,
  StyledTeacherList,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText
} from './styles';

const TeacherList: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });

        setFavorites(favoritedTeachersIds);
      };
    });
  }, []);

  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(!isFiltersVisible);
  }, [isFiltersVisible]);

  const handleFiltersSubmit = useCallback(async () => {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }, [subject, weekDay, time]);

  return (
    <Container>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#fff" />
        </BorderlessButton>
      )}>
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input 
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input 
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  value={weekDay}
                  onChangeText={text => setWeekDay(text)}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input 
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>
                Filtrar
              </SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <StyledTeacherList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </StyledTeacherList>
    </Container>
  );
}

export default TeacherList;
