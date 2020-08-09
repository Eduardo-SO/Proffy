import React, { useState, useCallback } from 'react';
import { Image, Linking } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer, 
  FavoriteButton,
  ContactButton,
  ContactButtonText
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
  favorited: boolean,
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleLinkToWhatsapp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }, []);

  const handleToggleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if(favorites) {
      favoritesArray = JSON.parse(favorites);
    };

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else { 
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }, [isFavorited]);

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora
          {'  '}
          <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton favorited={isFavorited} onPress={handleToggleFavorite}>
            {isFavorited 
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} />
            }
          </FavoriteButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText onPress={handleLinkToWhatsapp}>
              Entrar em contato
            </ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;