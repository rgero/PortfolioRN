import { IconButton, Surface } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import React from 'react';
import { openLink } from '../utils/openLink';

const SocialLinks = () => {
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
    paddingBottom: 5,
    width:"100%"
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default SocialLinks;
