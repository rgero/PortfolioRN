import React from "react";
import { View } from "react-native";

const VideoViewer = ({uri}) => {
  return (
    <View style={{ flex: 1, padding: 5 }}>
      <iframe width="50" height="50" src={`https://www.youtube.com/embed/${uri}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </View>
  );
};

export default VideoViewer;
