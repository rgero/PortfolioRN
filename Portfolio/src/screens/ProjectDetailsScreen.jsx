import ProjectLayout from "../components/ui/ProjectLayout";
import ProjectPresentation from "../components/projects/ProjectPresentation";

const ProjectDetailsScreen = ({route}) => {
  return (
    <ProjectLayout>
      <ProjectPresentation id={route.params.id} />
    </ProjectLayout>
  );
}

export default ProjectDetailsScreen
