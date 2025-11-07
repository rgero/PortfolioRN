import { Divider, Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import DetailsBox from "../ui/DetailsBox";
import ImageCarousel from "../mediaviewer/ImageCarousel";
import Markdown from "react-native-markdown-display";
import { RFPercentage } from "react-native-responsive-fontsize";
import { isMobile } from "../../utils/isMobile";
import { useGetCourse } from "./hooks/useGetCourse";

const CoursePresentation = ({ id }) => {
  const theme = useTheme();
  const { isLoading, course, error } = useGetCourse(id);

  if (isLoading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error: {error.message}</Text></View>;

  const hasDetails = course.repo !== "" || course.website !== "";
  
  return (
    <View>
      <Text style={{ fontSize: RFPercentage(3) }}>{course.name}</Text>
      <Divider style={{ marginBottom: 30 }} />
      <View style={styles.container}>
        <View style={styles.description}>
          <Markdown style={{ body: { color: theme.colors.outline, paddingBottom: "20px" } }}>
            {course.description}
          </Markdown>
          {course.media && course.media.length !== 0 && (
            <ImageCarousel media={course.media} />
          )}
        </View>
        {hasDetails && (
          <View style={styles.details}>
            <DetailsBox
              details={{
                repo: course.repo,
                website: course.website,
                tags: course.tags,
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

export default CoursePresentation;
