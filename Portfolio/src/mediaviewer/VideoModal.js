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
      margin: 20,
      borderRadius: 10,
      width: '75%',
      height: 'auto', // Height will be determined by aspect ratio
      alignSelf: 'center',
      justifyContent: 'center',
    },
    iframeContainer: {
      position: 'relative',
      width: '100%',
      paddingBottom: '56.25%', // 16:9 aspect ratio (height = 9/16 of width)
      overflow: 'hidden',
    },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none', // Removes iframe border
    },
  });

  const modalPresentation = isMobile ? (
    <VideoPresenter id={id} />
  ) : (
    <View style={styles.iframeContainer}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={styles.iframe}
      />
    </View>
  )

  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={dismissModal}
        contentContainerStyle={styles.container}
      >
        {id ? modalPresentation : (
          <View>
            <Text>No video available</Text>
          </View>
        )}
      </Modal>
    </Portal>
  );
};

export default VideoModal;
