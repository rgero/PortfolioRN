import { Image, View } from "react-native-web"
import { Text, useTheme } from "react-native-paper";

import { StyleSheet } from "react-native";

const DrawerHeader = () => {
  const theme = useTheme();
  return (
    <View style={[{backgroundColor: theme.colors.background }, styles.header]}>
      <Image
        source={{ uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg' }}
        style={styles.headerImage}
      />
      <Text variant="headlineMedium">Roymond.NET</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20
  },
  headerImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Makes the image circular
  },
  headerText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default DrawerHeader
