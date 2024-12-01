import { Platform, StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper"

import { ScrollView } from "react-native-web"
import { isMobile } from "../utils/isMobile";

const PageLayout = ({children}) => {
  const theme = useTheme();
  return (
    <ScrollView 
      style={[styles.container, {backgroundColor: theme.colors.elevation.level1}]}
      contentContainerStyle={{alignItems: "center"}}
      showsVerticalScrollIndicator={false}
    >
      <Surface style={styles.surface}>
          {children}
      </Surface>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  surface: {
    flex: 1,
    width: isMobile() ? "90%": "70%"
  }
});

export default PageLayout
