import { Drawer, useTheme } from "react-native-paper";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import DrawerHeader from "./DrawerHeader";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SocialContainer from "./SocialContainer";

const CustomDrawer = (props) => {
  const theme = useTheme();

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: theme.colors.background }}>
      <DrawerHeader/>
      <Drawer.Item
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        icon={() => <MaterialIcons name="home" size={24} color={theme.colors.primary} />}
      />
      <Drawer.Item
        label="Notifications"
        onPress={() => props.navigation.navigate('Notifications')}
        icon={() => <MaterialIcons name="notifications" size={24} color={theme.colors.primary} />}
      />
      <Drawer.Item
        label="Project List"
        onPress={() => props.navigation.navigate('Projects')}
        icon={() => <MaterialIcons name="list" size={24} color={theme.colors.primary} />}
      />
      <Drawer.Item
        label="Resume"
        onPress={() => props.navigation.navigate('Resume')}
        icon={() => <MaterialIcons name="description" size={24} color={theme.colors.primary} />}
      />
      <SocialContainer/>
    </DrawerContentScrollView>
  );
}


export default CustomDrawer
