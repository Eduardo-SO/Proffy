import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  padding: 40px;

  background-color: #8257e5;
`;

export const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  margin-top: 80px;

  color: #fff;

  font-size: 2e0px;
  line-height: 30px;
`;

export const TitleBold = styled.Text`
  font-weight: bold;
`;
