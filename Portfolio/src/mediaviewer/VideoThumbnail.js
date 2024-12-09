import { Image, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import VideoModal from "./VideoModal";

const VideoThumbnail = ({id}) => {
  const targetURL = `https://img.youtube.com/vi/${id}/0.jpg`;

  const [visible, setModalVisible] = useState(false);

  const dismissModal = () => {
    setModalVisible(false);
  }

  return (
    <>
      <VideoModal isVisible={visible} dismissModal={dismissModal} id={id}/>
      <View>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image
            source={{ uri: targetURL }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 75,
    height: 75,
  }
})

export default VideoThumbnail;
