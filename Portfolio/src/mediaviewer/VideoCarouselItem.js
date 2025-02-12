import { Button, Text } from "react-native-paper";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { View } from "react-native-web";
import { openLink } from "../utils/openLink";

const VideoCarouselItem = ({item}) => {
  const address = `https://img.youtube.com/vi/${item.src}/0.jpg`;
  const youtubeLink = `https://www.youtube.com/watch?v=${item.src}`;
  
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
      }}
    >
      <Image
        source={{ uri: address }}
        style={styles.image}
        resizeMode="contain"
      />
      <Button
        icon="youtube"
        size={20}
        onPress={() => openLink(youtubeLink)}
      >
        Open on YouTube
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    height: "auto",
    borderRadius: 10,
  },
});

export default VideoCarouselItem
