import { FAB, Surface, useTheme } from "react-native-paper"
import { SafeAreaView, ScrollView } from "react-native-web";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from "react-native";
import { isMobile } from "../utils/isMobile";
import { useNavigation } from "@react-navigation/native"

const ProjectLayout = ({children}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.surface}}>
      <Surface style={styles.surface}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {children}
        </ScrollView>
        <FAB 
          style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
          icon={() => <MaterialIcons name="arrow-back" size={24} color={theme.colors.primary} />}
          onPress={() => navigation.navigate('Projects', {screen: 'Project List'})}
        />
      </Surface>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    width: isMobile() ? '100%' : '70%', 
    alignSelf: 'center'
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: isMobile() ? 100 : undefined,
    paddingTop: 10,
    paddingHorizontal: 20
  },
})

export default ProjectLayout
