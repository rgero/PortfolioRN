import { PaperProvider, useTheme } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomDrawer from './src/components/drawer/CustomDrawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProjectNavigator from './src/components/navigators/ProjectNavigator';
import ResumeScreen from './src/screens/ResumeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WebsiteTheme } from './src/utils/theme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProjectProvider } from './src/context/ProjectContext';

const Drawer = createDrawerNavigator();

const linking = {
  prefixes: [
    'roymondnet://', 
    'https://portfolio.roymond.net', 
    "https://roymond.net", 
    "https://www.roymond.net",
  ],
  config: {
    screens: {
      Home: '',
      Notifications: 'notifications',
      Projects: {
        path: 'projects',
        screens: {
          "Project List": '',
          "Project Details": ':id',
        },
      },
      Resume: 'resume',
    },
  },
};

const timeInSeconds = 600;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: timeInSeconds * 1000
    }
  }
})

export default function App() {
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const loadNavigationState = async () => {
      const savedState = await AsyncStorage.getItem('NAVIGATION_STATE');
      if (savedState) {
        setInitialState(JSON.parse(savedState));
      }
    };
    loadNavigationState();
  }, []);

  const onStateChange = async (state) => {
    await AsyncStorage.setItem('NAVIGATION_STATE', JSON.stringify(state));
  };
  
  return (
    <GestureHandlerRootView>
      <PaperProvider theme={WebsiteTheme}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <ProjectProvider>
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
                      title: `${route.name} - Roymond.NET`,
                    };
                  }}
                >
                  <Drawer.Screen name="Home" component={HomeScreen} />
                  <Drawer.Screen
                    name="Projects" 
                    component={ProjectNavigator}
                  />
                  <Drawer.Screen name="Resume" component={ResumeScreen} />
                </Drawer.Navigator>
              </NavigationContainer>
            </ProjectProvider>
          </SafeAreaProvider>
        </QueryClientProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
