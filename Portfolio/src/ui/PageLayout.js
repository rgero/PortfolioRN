import { Platform, StyleSheet } from "react-native";

import { ScrollView } from "react-native-web"
import { Surface } from "react-native-paper"

const PageLayout = ({children}) => {
  return (
    <Surface style={{ flex: 1, alignItems: 'center', }}>
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Platform.OS === 'web' ? '70%' : '100%',
    alignSelf: 'center', // Center the list horizontally on the web
  },
});

export default PageLayout
