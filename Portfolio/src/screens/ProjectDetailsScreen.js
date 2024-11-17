import { Surface, Text } from "react-native-paper";

import ProjectPresentation from "../projects/ProjectPresentation";

const ProjectDetailsScreen = ({route}) => {
  return (
    <Surface style={{ flex: 1, alignItems: 'center'}}>
      <Text variant="displayLarge">Project Detail Screen</Text>
      <ProjectPresentation id={route.params.id} />
    </Surface>
  );
}

export default ProjectDetailsScreen
