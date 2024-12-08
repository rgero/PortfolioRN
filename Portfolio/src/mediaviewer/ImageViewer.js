import { Image, StyleSheet, View } from "react-native"

const ImageViewer = ({uri}) => {
  console.log(uri);
  return (
    <View style={{padding: 5}}>
      <Image
        source={{ uri: uri }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  )
}

export default ImageViewer

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
  }
})