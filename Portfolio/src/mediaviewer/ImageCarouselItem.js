import { Image, StyleSheet } from "react-native";

import { Text } from "react-native-paper";
import { View } from "react-native-web";

const ImageCarouselItem = ({item}) => {
  let address;
  if (item.type === "image")
  {
    address = item.src;
  } else {
    address = `https://img.youtube.com/vi/${item.id}/0.jpg`;
  }
  
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
      {/* <Text style={{ textAlign: "center", fontSize: 30 }}>Test</Text> */}
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

export default ImageCarouselItem
