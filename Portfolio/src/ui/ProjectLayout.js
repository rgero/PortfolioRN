import { FAB, Surface, useTheme } from "react-native-paper"
import { ScrollView, View } from "react-native-web";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native"

const ProjectLayout = ({children}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Surface style={{ flex: 1, alignItems: 'center'}}>
      <ScrollView style={{paddingTop: 10, paddingHorizontal: 10}}>
        {children}
      </ScrollView>
      <FAB 
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        icon={() => <MaterialIcons name="arrow-back" size={24} color={theme.colors.primary} />}
        onPress={() => navigation.navigate('Projects', {screen: 'Project List'})}
      />
    </Surface>
  )
}

export default ProjectLayout
