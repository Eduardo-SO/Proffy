import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../images/icons/whatsapp.svg';

import { 
  Container, 
  SearchTeachers, 
  InputBlock,
  Content,
  TeacherItem,
  ItemHeader,
  ItemFooter
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
        <TeacherItem>
          <ItemHeader>
            <img src="https://avatars2.githubusercontent.com/u/54240849?s=460&u=1726068c37491bf0147a99458ac086305b706f81&v=4" alt="Eduardo SO"/>

            <div>
              <strong>Eduardo SO</strong>
              <span>Física</span>
            </div>
          </ItemHeader>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, cum!
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet placeat excepturi deserunt doloribus, saepe suscipit nam nobis quas recusandae labore ad maiores facere perferendis itaque ratione neque ex iure.
          </p>

          <ItemFooter>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </ItemFooter>
        </TeacherItem>
      </Content>
    </Container>
  );
}

export default TeacherList;