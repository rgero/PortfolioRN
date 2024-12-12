import { Image, StyleSheet, View } from "react-native";

import { Button } from "react-native-paper";
import { openLink } from "../utils/openLink";

const VideoPresenter = ({ id }) => {
  const targetImageURL = `https://img.youtube.com/vi/${id}/0.jpg`;
  const targetYoutubeURL = `https://www.youtube.com/watch?v=${id}`;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: targetImageURL }}
        style={styles.image}
        resizeMode="contain"
      />
      <Button mode="contained" onPress={() => openLink(targetYoutubeURL)} style={styles.button}>
        Watch on YouTube
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default VideoPresenter;
