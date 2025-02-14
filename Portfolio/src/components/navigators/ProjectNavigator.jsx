import ProjectDetailsScreen from "../../screens/ProjectDetailsScreen";
import ProjectListScreen from "../../screens/ProjectListScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ProjectNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}  >
      <Stack.Screen 
        name="Project List" 
        component={ProjectListScreen}
      />
      <Stack.Screen name="Project Details" component={ProjectDetailsScreen} />
    </Stack.Navigator>
  )
}

export default ProjectNavigator
