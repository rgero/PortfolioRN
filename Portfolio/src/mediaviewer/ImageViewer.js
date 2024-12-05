import { Image, StyleSheet, View } from "react-native"

const ImageViewer = ({uri}) => {
  return (
    <View style={{padding: 5}}>
      <Image
        source={{ uri: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" }}
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