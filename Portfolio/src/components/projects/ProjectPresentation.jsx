import { Divider, Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import DetailsBox from "./DetailsBox";
import ImageCarousel from "../mediaviewer/ImageCarousel";
import Markdown from "react-native-markdown-display";
import { RFPercentage } from "react-native-responsive-fontsize";
import { isMobile } from "../../utils/isMobile";
import { useGetProject } from "./hooks/useGetProject";

const ProjectPresentation = ({ id }) => {
  const theme = useTheme();
  const { isLoading, project, error } = useGetProject(id);

  if (isLoading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error: {error.message}</Text></View>;

  const hasDetails = project.repo !== "" || project.website !== "";
  
  return (
    <View>
      <Text style={{ fontSize: RFPercentage(3) }}>{project.name}</Text>
      <Divider style={{ marginBottom: 30 }} />
      <View style={styles.container}>
        <View style={styles.description}>
          <Markdown style={{ body: { color: theme.colors.outline, paddingBottom: "15px" } }}>
            {project.description}
          </Markdown>
          {project.media.length !== 0 && (
            <ImageCarousel media={project.media} />
          )}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: isMobile() ? 'column-reverse' : 'row',
  },
  description: {
    flex: isMobile() ? 1 : 6,
  },
  details: {
    flex: isMobile() ? undefined : 1,
  }
});

export default ProjectPresentation;
