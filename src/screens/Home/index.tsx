import React from 'react';
import { useTheme } from '@hooks/theme';

import {
  Container,
  ScrollContainer,
  Header,
  HeaderTitle,
  Heading,
  HeadingTitle,
  ThemeSwitchContainer,
  Switcher,
  ProfileContainer,
} from './styles';

import ProfileCard from '@components/ProfileCard';

export default function Home() {
  const { handleTheme, isEnabled } = useTheme();

  const githubProfiles = [
    {
      id: '01',
      userGithub: 'rogeraugusto',
    },
    {
      id: '02',
      userGithub: 'rogeraugusto',
    },
    {
      id: '03',
      userGithub: 'rogeraugusto',
    },
    {
      id: '04',
      userGithub: 'rogeraugusto',
    },
    {
      id: '05',
      userGithub: 'rogeraugusto',
    },
    {
      id: '06',
      userGithub: 'rogeraugusto',
    },
    {
      id: '07',
      userGithub: 'rogeraugusto',
    },
  ];

  return (
    <Container>
      <Header>
        <HeaderTitle>React Native com Expo</HeaderTitle>
        <ThemeSwitchContainer>
          <Switcher
            isEnabled={isEnabled}
            onValueChange={handleTheme}
            value={isEnabled}
          />
        </ThemeSwitchContainer>
      </Header>
      <ScrollContainer
        contentInsetAdjustmentBehavior="never"
        scrollEventThrottle={16}
        bounces={false}
      >
        <Heading>
          <HeadingTitle>The best devs</HeadingTitle>
        </Heading>
        <ProfileContainer>
          {githubProfiles.map((profile) => (
            <ProfileCard key={profile.id} userGithub={profile.userGithub} />
          ))}
        </ProfileContainer>
      </ScrollContainer>
    </Container>
  );
}
