import { Image, StyleSheet, View } from "react-native";

import React from "react";

const VideoViewer = ({uri}) => {
  const url = `https://img.youtube.com/vi/${uri}/0.jpg`;
  return (
    <View style={{ flex: 1, padding: 5 }}>
      <Image
        source={{ uri: url }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      {/* <iframe 
        width="50" 
        height="50" 
        src={`https://www.youtube.com/embed/${uri}`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

      </iframe> */}
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 75,
    height: 75,
  }
})

export default VideoViewer;
