import { FAB, Surface, useTheme } from "react-native-paper"
import { SafeAreaView, ScrollView } from "react-native-web";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { isAndroidWeb } from "../utils/platformIdentification";
import { isMobile } from "../utils/isMobile";
import { useNavigation } from "@react-navigation/native"

const ProjectLayout = ({children}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.surface}}>
      <Surface style={{ flex: 1, width: isMobile() ? '100%' : '70%', alignSelf: 'center'}}>
        <ScrollView style={{paddingTop: 10, paddingHorizontal: 20}}>
          {children}
        </ScrollView>
        <FAB 
          style={{ position: 'absolute', margin: 16, right: 0, bottom: isAndroidWeb() ? 20 : 0 }}
          icon={() => <MaterialIcons name="arrow-back" size={24} color={theme.colors.primary} />}
          onPress={() => navigation.navigate('Projects', {screen: 'Project List'})}
        />
      </Surface>
    </SafeAreaView>
  )
}

export default ProjectLayout
