import { DarkTheme, PaperProvider } from 'react-native-paper';

import CustomDrawer from './src/drawer/CustomDrawer';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProjectListScreen from './src/screens/ProjectListScreen';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={DarkTheme}>
      <NavigationContainer>
        <Drawer.Navigator 
          drawerContent={(props) => <CustomDrawer {...props}/> }
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerTitle: `${route.name} - Roymond.NET`
          })}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Project List" component={ProjectListScreen} />
          <Drawer.Screen name="Resume" component={ProjectListScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
