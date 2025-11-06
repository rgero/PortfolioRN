import { Drawer, useTheme } from "react-native-paper";
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { DrawerContentScrollView } from "@react-navigation/drawer";
import DrawerHeader from "./DrawerHeader";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SocialContainer from "./SocialContainer";

const CustomDrawer = (props) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: theme.colors.background}]}>
      <View style={styles.container}>
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
          <View>
            <DrawerHeader/>
            <Drawer.Item
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
              icon={() => <MaterialIcons name="home" size={24} color={theme.colors.primary} />}
            />
            <Drawer.Item
              label="Course List"
              onPress={() => props.navigation.navigate('Courses', {screen: 'Course List'})}
              icon={() => <MaterialIcons name="cast-for-education" size={24} color={theme.colors.primary} />}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default CustomDrawer;
