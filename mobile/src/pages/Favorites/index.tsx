import React, { useCallback, useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { 
  Container,
  StyledTeacherList
} from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);
  
  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        
        setFavorites(favoritedTeachers);
      };
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  )
  
  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos" />

      <StyledTeacherList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >

        {favorites.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited
          />
        ))}
      </StyledTeacherList>
    </Container>
  );
}

export default Favorites;
