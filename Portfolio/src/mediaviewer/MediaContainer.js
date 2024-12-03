import Image from "./ImageViewer"
import { StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { View } from "react-native-web"

const MediaContainer = ({media}) => {
  
  if (!media || media.length === 0) {
    return null
  }

  /*
    Media is going to be a list of objects.
    Each object will have a type and a url.
    The type will be either image or video.
    The url will be the location of the media.
  */
  return (
    <View style={styles.imageContainer}>
      {media.map((item, index) => {
        if (item.type === "image") {
          return <Image key={index} uri={item.url}/>
        } else {
          return <Text variant="bodyLarge">Not Implemented yet</Text>
        }
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer:
  {
    maxWidth: "40%",
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default MediaContainer
