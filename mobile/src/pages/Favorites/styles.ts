import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

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
  margin-top: -60px;
`;