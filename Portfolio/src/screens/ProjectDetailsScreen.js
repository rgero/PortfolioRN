import { Surface, Text } from "react-native-paper";

import ProjectLayout from "../ui/ProjectLayout";
import ProjectPresentation from "../projects/ProjectPresentation";

const ProjectDetailsScreen = ({route}) => {
  return (
    <ProjectLayout>
      <ProjectPresentation id={route.params.id} />
    </ProjectLayout>
  );
}

export default ProjectDetailsScreen
