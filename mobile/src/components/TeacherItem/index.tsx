import React, { useState } from 'react';
import { Image } from 'react-native';

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

const TeacherItem: React.FC = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: "https://avatars2.githubusercontent.com/u/54240849?s=460&u=1726068c37491bf0147a99458ac086305b706f81&v=4" }} />

        <ProfileInfo>
          <Name>Eduardo Souza</Name>
          <Subject>Física</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        {'\n'}{'\n'}
        Quis in laboriosam quidem, excepturi, eligendi asperiores totam aperiam 
        facere nisi est, porro distinctio!
      </Bio>

      <Footer>
        <Price>
          Preço/hora
          {'  '}
          <PriceValue>R$ 240,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton favorited={isFavorited}>
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </FavoriteButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;