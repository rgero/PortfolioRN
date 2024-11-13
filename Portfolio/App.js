import { MD3DarkTheme, PaperProvider } from 'react-native-paper';

import CustomDrawer from './src/drawer/CustomDrawer';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProjectListScreen from './src/screens/ProjectListScreen';
import React from 'react';
import ResumeScreen from './src/screens/ResumeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from 'react-native-web';

const Drawer = createDrawerNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
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
          <Drawer.Screen name="Resume" component={ResumeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
