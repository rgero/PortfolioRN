import { Drawer, useTheme } from "react-native-paper";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import DrawerHeader from "./DrawerHeader";

const CustomDrawer = (props) => {
  const theme = useTheme();

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: theme.colors.background }}>
      <DrawerHeader/>
      <Drawer.Item
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        icon="home"
      />
      <Drawer.Item
        label="Notifications"
        onPress={() => props.navigation.navigate('Notifications')}
        icon="home"
      />
      <Drawer.Item
        label="Project List"
        onPress={() => props.navigation.navigate('Project List')}
        icon="home"
      />
      <Drawer.Item
        label="Resume"
        onPress={() => props.navigation.navigate('Resume')}
        icon="home"
      />
    </DrawerContentScrollView>
  );
}


export default CustomDrawer
