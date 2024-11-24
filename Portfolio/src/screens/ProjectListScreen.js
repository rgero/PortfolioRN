import PageLayout from "../ui/PageLayout";
import ProjectList from "../projects/ProjectList";
import Title from "../ui/Title";

const ProjectListScreen = () => {
  return (
    <PageLayout>
      <Title>Projects</Title>
      <ProjectList/>
    </PageLayout>
  );
}

export default ProjectListScreen
