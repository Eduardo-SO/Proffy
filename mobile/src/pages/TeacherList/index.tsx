import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { 
  Container,
  StyledTeacherList,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock
} from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis">
        <SearchForm>
          <Label>Matéria</Label>
          <Input 
            placeholder="Qual a matéria?"
            placeholderTextColor="#c1bccc"
          />

          <InputGroup>
            <InputBlock>
              <Label>Dia da semana</Label>
              <Input 
                placeholder="Qual o dia?"
                placeholderTextColor="#c1bccc"
              />
            </InputBlock>

            <InputBlock>
              <Label>Horário</Label>
              <Input 
                placeholder="Qual horário?"
                placeholderTextColor="#c1bccc"
              />
            </InputBlock>
          </InputGroup>
        </SearchForm>
      </PageHeader>

      <StyledTeacherList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </StyledTeacherList>
    </Container>
  );
}

export default TeacherList;
