import ProjectCard from "./ProjectCard"
import { ScrollView } from "react-native-web"
import { Text } from "react-native-paper";
import { useGetProjects } from "./hooks/useGetProjects";

const ProjectList = () => {
  const {isLoading, projects, error} = useGetProjects();

  if (isLoading) return <Text>Loading...</Text>
  if (projects.length === 0) return <Text>No projects found</Text>
  if (error) return <Text>Error: {error.message}</Text>

  console.log(projects);

  return (
    <ScrollView style={{width: "100%"}}>
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} title={project.name} language={project.tags[0]} short={project.short} id={project.id} />
      ))}
    </ScrollView>
  )
}

export default ProjectList
