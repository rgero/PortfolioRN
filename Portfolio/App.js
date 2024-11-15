import { MD3DarkTheme, PaperProvider, useTheme } from 'react-native-paper';
import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomDrawer from './src/drawer/CustomDrawer';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProjectDetailsScreen from './src/screens/ProjectDetailsScreen';
import ProjectListScreen from './src/screens/ProjectListScreen';
import ResumeScreen from './src/screens/ResumeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from 'react-native-web';

const Drawer = createDrawerNavigator();

const linking = {
  prefixes: ['roymondnet://', 'https://www.roymond.net'],
  config: {
    screens: {
      Home: '',
      Notifications: 'notifications',
      'Project List': 'projects',
      'Project Details': 'projects/:id',
      Resume: 'resume',
    },
  },
};

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;

  const [initialState, setInitialState] = useState();

  // Load the saved state on initial app load
  useEffect(() => {
    const loadNavigationState = async () => {
      const savedState = await AsyncStorage.getItem('NAVIGATION_STATE');
      if (savedState) {
        setInitialState(JSON.parse(savedState));
      }
    };
    loadNavigationState();
  }, []);

  // Save the navigation state on every change
  const onStateChange = async (state) => {
    await AsyncStorage.setItem('NAVIGATION_STATE', JSON.stringify(state));
  };


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer
        linking={linking}
        initialState={initialState}
        onStateChange={onStateChange}
      >
        <Drawer.Navigator 
          drawerContent={(props) => <CustomDrawer {...props}/> }
          screenOptions={({ route }) => {
            const { colors } = useTheme();
            return {
              headerTitle: `${route.name} - Roymond.NET`,
              headerTitleStyle: {
                color: colors.primary,
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: colors.background,
                borderBottomWidth: 0,
              },
              headerTintColor: colors.primary,
            };
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Project List" component={ProjectListScreen} />
          <Drawer.Screen name="Project Details" component={ProjectDetailsScreen} />
          <Drawer.Screen name="Resume" component={ResumeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
