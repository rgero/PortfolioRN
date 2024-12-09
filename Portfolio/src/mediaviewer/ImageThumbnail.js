import { Image, Pressable, StyleSheet, View } from "react-native"

import ImageModal from "./ImageModal";
import { useState } from "react";

const ImageViewer = ({uri}) => {
  const [visible, setModalVisible] = useState(false);

  const dismissModal = () => {
    setModalVisible(false);
  }

  return (
    <>
      <ImageModal isVisible={visible} dismissModal={dismissModal} uri={uri}/>
      <View style={{padding: 5}}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image
            source={{ uri: uri }}
            style={styles.image}
            resizeMode="cover"
          />
        </Pressable>
      </View>
    </>
  )
}

export default ImageViewer

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
  }
})