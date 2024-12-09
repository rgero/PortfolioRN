import ImageThumbnail from "./ImageThumbnail";
import { StyleSheet } from "react-native";
import VideoThumbnail from "./VideoThumbnail";
import { View } from "react-native-web";
import { isMobile } from "../utils/isMobile";

const MediaContainer = ({ media }) => {
  if (!media || media.length === 0) {
    return null;
  }

  return (
    <View style={styles.imageContainer}>
      {media.map((item, index) => {
        if (item.type === "image") {
          return (
            <View key={index} style={styles.item}>
              <ImageThumbnail uri={item.src} />
            </View>
          );
        } else {
          return (
            <View key={index} style={styles.item}>
              <VideoThumbnail id={item.src} />
            </View>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    maxWidth: "80%", // Adjust the container width as needed
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap", // Enables wrapping to new rows
    justifyContent: "space-between", // Adds spacing between items
  },
  item: {
    width: isMobile() ? "25%" : "18%", // Each item takes 18% of the container's width (slightly less than 20% to leave space for gaps)
    aspectRatio: 1, // Keeps items square
    margin: "1%", // Adds margin for spacing
  },
});

export default MediaContainer;
