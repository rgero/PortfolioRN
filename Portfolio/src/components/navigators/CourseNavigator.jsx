import CourseDetailsScreen from "../../screens/courses/CourseDetailScreen";
import CourseListScreen from "../../screens/courses/CourseListScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CourseNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}  >
      <Stack.Screen 
        name="Course List" 
        component={CourseListScreen}
      />
      <Stack.Screen name="Course Details" component={CourseDetailsScreen} />
    </Stack.Navigator>
  )
}

export default CourseNavigator
