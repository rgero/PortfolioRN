import { FlatList } from "react-native";
import ProjectCard from "./ProjectCard"
import { Text } from "react-native-paper";
import { useGetProjects } from "./hooks/useGetProjects";
import { useSearchContext } from "../../context/SearchContext";

const ProjectList = () => {
  const {isLoading, projects, error} = useGetProjects();
  const {searchText} = useSearchContext();

  const filteredProjects = projects.filter(project => {
    const searchTerm = searchText.toLowerCase();
    return (
      project.name.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });

  if (isLoading) return <Text>Loading...</Text>
  if (projects.length === 0) return <Text>No projects found</Text>
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <FlatList
      data={filteredProjects}
      renderItem={({item}) => <ProjectCard title={item.name} languages={item.tags} short={item.short} id={item.id} />}
      keyExtractor={item => item.id}
    />
  )
}

export default ProjectList
