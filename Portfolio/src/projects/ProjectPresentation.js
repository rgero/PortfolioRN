import { Divider, Text, useTheme } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";

import DetailsBox from "./DetailsBox";
import Markdown from "react-native-markdown-display";
import { RFPercentage } from "react-native-responsive-fontsize";
import { isMobile } from "../utils/isMobile";
import { useGetProject } from "./hooks/useGetProject";

const ProjectPresentation = ({ id }) => {
  const theme = useTheme();
  const { isLoading, project, error } = useGetProject(id);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const hasDetails = project.repo !== "" || project.website !== "";

  return (
    <ScrollView>
      <Text style={{ fontSize: RFPercentage(3) }}>{project.name}</Text>
      <Divider style={{ marginBottom: 30 }} />
      <View style={styles.container}>
        <View style={styles.description}>
          <Markdown style={{ body: { color: theme.colors.outline } }}>
            {project.description}
          </Markdown>
        </View>
        {hasDetails && (
          <View style={styles.details}>
            <DetailsBox
              details={{
                repo: project.repo,
                website: project.website,
                tags: project.tags,
              }}
            />
          </View> 
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: isMobile() ? 'column-reverse' : 'row',
  },
  description: {
    flex: 6, // Adjust the flex value to specify the width
    paddingTop: 20,
  },
  details: {
    flex: 1, // Adjust the flex value to specify the width
  },
});

export default ProjectPresentation;
