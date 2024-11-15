import { Surface, Text } from "react-native-paper";

const ProjectDetailsScreen = ({route}) => {
  return (
    <Surface style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant="displayLarge">Project Detail Screen</Text>
      <Text variant="displayMedium">{route.params.id}</Text>
    </Surface>
  );
}

export default ProjectDetailsScreen
