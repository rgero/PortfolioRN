import { Modal, Portal, Text, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import React from 'react';
import VideoPresenter from './VideoPresenter';
import { isMobile } from '../utils/isMobile';

const VideoModal = ({ isVisible, dismissModal, id }) => {
  const theme = useTheme();
  const isOnMobile = isMobile();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: 20,
      borderRadius: 10,
      width: '90%',
      maxWidth: isOnMobile ? '85%' : '60%',
      maxHeight: '80%',
      alignSelf: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    mobileContainer: {
      backgroundColor: theme.colors.surface,
      padding: 25,
      borderRadius: 10,
      alignSelf: 'center', // Centers the modal
      maxWidth: isOnMobile ? '90%' : '60%',
      maxHeight: '80%',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    content: {
      flex: 1,
    },
  });

  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={dismissModal}
        contentContainerStyle={isOnMobile ? styles.mobileContainer : styles.container}
      >
        {id ? (
          <View style={styles.content}>
            {isOnMobile ? <VideoPresenter id={id} /> : <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />}
          </View>
        ) : (
          <View>
            <Text>No video available</Text>
          </View>
        )}
      </Modal>
    </Portal>
  );
};

export default VideoModal;