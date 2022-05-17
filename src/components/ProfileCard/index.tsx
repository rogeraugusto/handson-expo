import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Overlay, Avatar, Title } from './styles';

import { ProfileInfo, ProfileItem } from '@dtos/profileDTO';

export default function ProfileCard({ userGithub }: ProfileInfo) {
  const [profile, setProfileData] = useState({} as ProfileItem);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await fetch(
        `https://api.github.com/users/${userGithub}`,
      );
      const data = await response.json();

      setProfileData(data);
    }

    loadData();
  }, []);

  return (
    <Container>
      <Overlay />
      <Avatar
        source={{ uri: profile.avatar_url }}
        style={[StyleSheet.absoluteFillObject]}
      />
      <Title>{profile.name}</Title>
    </Container>
  );
}
