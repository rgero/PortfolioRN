import React from "react";
import { View } from "react-native";

const VideoViewer = ({type, src}) => {

  

  let url = "";
  if (type === "playlist") {
    url = `https://www.youtube.com/embed?listType=playlist&list=${src}`;
  } else {
    url = `https://www.youtube.com/embed/${src}`;
  }

  return (
    <View style={{ flex: 1 }}>
      <iframe
        width="100%"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </View>
  );
};

export default VideoViewer;
