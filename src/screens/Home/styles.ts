import styled from 'styled-components/native';
import { Switch } from 'react-native';

type SwitcherProps = {
  isEnabled: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Header = styled.View`
  margin: 50px 15px 30px 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ThemeSwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Switcher = styled(Switch).attrs<SwitcherProps>(
  ({ isEnabled, theme }) => ({
    trackColor: {
      true: theme.colors.border,
      false: theme.colors.primary_light,
    },
    thumbColor: isEnabled
      ? theme.colors.switcherEnabled
      : theme.colors.switcherDisabled,
    ios_backgroundColor: theme.colors.dark_heavy,
  }),
)`
  margin-top: -15px;
  margin-right: 10px;
`;

export const ProfileContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
