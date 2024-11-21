import { FAB, Surface, useTheme } from "react-native-paper"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View } from "react-native-web";
import { useNavigation } from "@react-navigation/native"

const ProjectLayout = ({children}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Surface style={{ flex: 1, alignItems: 'center'}}>
      <View style={{paddingTop: 10, paddingHorizontal: 10,}}>
        {children}
      </View>
      <FAB 
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        icon={() => <MaterialIcons name="arrow-back" size={24} color={theme.colors.primary} />}
        onPress={() => navigation.navigate('Project List')}
      />
    </Surface>
  )
}

export default ProjectLayout
