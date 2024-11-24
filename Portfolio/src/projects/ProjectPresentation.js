import { Divider, MD3DarkTheme, Text, useTheme } from "react-native-paper";
import { ScrollView, View } from "react-native-web";

import DetailsBox from "./DetailsBox";
import Markdown from "react-native-markdown-display";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useGetProject } from "./hooks/useGetProject";

const ProjectPresentation = ({id}) => {
  const theme = useTheme();
  const {isLoading, project, error} = useGetProject(id);

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <ScrollView>
      <Text style={{ fontSize: RFPercentage(3) }}>{project.name}</Text>
      <Divider/>
      <DetailsBox details={{
        repo: project.repo,
        website: project.website,
        tags: project.tags
      }}/>
      <View style={{paddingTop: 20}}>
        <Markdown style={{body: {color: theme.colors.outline}}}>{project.description}</Markdown>
      </View>
    </ScrollView>
  )
}

export default ProjectPresentation
