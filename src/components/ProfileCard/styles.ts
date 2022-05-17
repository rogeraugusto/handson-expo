import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const marginLeft = 15;

const windowWidth = (Dimensions.get('window').width - marginLeft * 3) / 2;

export const Container = styled.TouchableOpacity`
  position: relative;
  justify-content: flex-end;
  width: ${windowWidth}px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 15px;
  margin-left: ${marginLeft}px;
  margin-bottom: 20px;
  align-items: center;
`;

export const Overlay = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary_light};
  height: 30%;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  opacity: 0.6;
`;

export const Avatar = styled.ImageBackground.attrs({
  borderRadius: 15,
  resizeMode: 'contain',
})``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark_heavy};
  margin-bottom: 10px;
`;
