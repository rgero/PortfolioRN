import { Surface, useTheme } from "react-native-paper"

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web"
import { StyleSheet } from "react-native";
import { isMobile } from "../../utils/isMobile";

const PageLayout = ({children}) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.colors.surface}]}>
      <ScrollView 
        style={[styles.container, {backgroundColor: theme.colors.surface}]}
        contentContainerStyle={{alignItems: "center"}}
        showsVerticalScrollIndicator={false}
      >
        <Surface style={styles.surface}>
            {children}
        </Surface>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  surface: {
    flex: 1,
    width: isMobile() ? "90%": "70%",
    padding: 20,
  }
});

export default PageLayout
