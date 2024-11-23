import * as Linking from 'expo-linking';

import { IconButton, Surface } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import React from 'react';

const SocialLinks = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.iconContainer}>
        <IconButton
          icon="github"
          size={30}
          onPress={() => openLink('https://github.com/rgero')}
        />
        <IconButton
          icon="linkedin"
          size={30}
          onPress={() => openLink('https://linkedin.com/in/roygero')}
        />
        <IconButton
          icon="instagram"
          size={30}
          onPress={() => openLink('https://instagram.com/rwgero')}
        />
        <IconButton
          icon="youtube"
          size={30}
          onPress={() => openLink('https://www.youtube.com/@roygero')}
        />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    elevation: 4,
    marginTop: 30
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default SocialLinks;
