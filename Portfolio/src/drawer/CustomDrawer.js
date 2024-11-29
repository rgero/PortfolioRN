import { Drawer, useTheme } from "react-native-paper";

import { DrawerContentScrollView } from "@react-navigation/drawer";
import DrawerHeader from "./DrawerHeader";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SocialContainer from "./SocialContainer";
import { View } from 'react-native';

const CustomDrawer = (props) => {
  const theme = useTheme();

  return (
    <View style={{
      flex: 1,
      paddingBottom: 50,
      backgroundColor: theme.colors.background
    }}>
      <DrawerContentScrollView {...props} style={{ backgroundColor: theme.colors.background }}>
        <View>
          <DrawerHeader/>
          <Drawer.Item
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <MaterialIcons name="home" size={24} color={theme.colors.primary} />}
          />
          <Drawer.Item
            label="Project List"
            onPress={() => props.navigation.navigate('Projects', {screen: 'Project List'})}
            icon={() => <MaterialIcons name="list" size={24} color={theme.colors.primary} />}
          />
          <Drawer.Item
            label="Resume"
            onPress={() => props.navigation.navigate('Resume')}
            icon={() => <MaterialIcons name="description" size={24} color={theme.colors.primary} />}
          />
        </View>
      </DrawerContentScrollView>
      <SocialContainer/>
    </View>
  );
}

export default CustomDrawer;
