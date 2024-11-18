import { FlatList } from "react-native";
import ProjectCard from "./ProjectCard"
import { ScrollView } from "react-native-web"
import { Text } from "react-native-paper";
import { useGetProjects } from "./hooks/useGetProjects";

const ProjectList = () => {
  const {isLoading, projects, error} = useGetProjects();

  if (isLoading) return <Text>Loading...</Text>
  if (projects.length === 0) return <Text>No projects found</Text>
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <FlatList
      data={projects}
      renderItem={({item}) => <ProjectCard title={item.name} languages={item.tags} short={item.short} id={item.id} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default ProjectList
