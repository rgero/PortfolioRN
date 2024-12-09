import { Button, Modal, Portal, Text, useTheme } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';

import React from 'react';

const ImageModal = ({ isVisible, dismissModal, uri }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: 20,
      margin: 20,
      borderRadius: 10,
      width: "75%",
      height: "75%",
      alignSelf: 'center', // Center the image horizontally
      alignHeight: 'center', // Center the image vertically
    },
    image: {
      width: '100%', // Set image width relative to modal
      height: '100%', // Set image height relative to modal
      borderRadius: 10,
    },
  });

  return (
    <Portal>
      <Modal visible={isVisible} onDismiss={dismissModal} contentContainerStyle={styles.container}>
        {uri ? (
          <Image
            source={{ uri: uri }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <View>
            <Text>No image available</Text>
          </View>
        )}
      </Modal>
    </Portal>
  );
};

export default ImageModal;
