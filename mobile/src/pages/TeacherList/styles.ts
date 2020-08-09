import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: 80px;

  color: #fff;

  font-family: 'Poppins_400Regular';
  font-size: 20px;
  line-height: 30px;
`;

export const StyledTeacherList = styled(ScrollView)`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`

export const Input = styled.TextInput`
  justify-content: center;

  height: 54px;
  margin: 4px 0 16px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: #fff;
`

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;

`

export const InputBlock = styled.View`
  width: 48%;
`

export const SubmitButton = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 56px;
  border-radius: 8px;
  background-color: #04d361;
`

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
`
