import { Divider, Text } from "react-native-paper";

import { View } from "react-native-web";
import { useGetProject } from "./hooks/useGetProject";

const ProjectPresentation = ({id}) => {
  const {isLoading, project, error} = useGetProject(id);

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View>
      <Text variant="displayMedium">{project.name}</Text>
      <Divider/>
      <View style={{paddingTop: 20}}>
        <Text>{project.description}</Text>
      </View>
    </View>
  )
}

export default ProjectPresentation
