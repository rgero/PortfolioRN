import { IconButton, useTheme } from "react-native-paper";

import CourseList from "../../components/courses/CourseList";
import Markdown from "react-native-markdown-display";
import OptionsMenu from "../../components/ui/OptionsMenu";
import PageLayout from "../../components/ui/PageLayout";
import Title from "../../components/ui/Title";
import { View } from "react-native-web";
import courseIntroduction from "../../data/Courses";
import { useCourseContext } from "../../context/CourseContext";
import { useState } from "react";

const CourseListScreen = () => {
  const [visible, setVisible] = useState(false);
  const { isLoading, completedCourses, inProgressCourses, handleSearchChange, searchText } = useCourseContext();
  const theme = useTheme();

  const toggleSearchVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <PageLayout>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Title>Courses</Title>
        <IconButton
          icon={visible ? "close" : "magnify"}
          onPress={toggleSearchVisibility}
          size={24}
        />
      </View>
      <OptionsMenu visible={visible} searchText={searchText} handleSearchChange={handleSearchChange} />
      <Markdown style={{body: {color: theme.colors.onSurface}}}>
        {courseIntroduction}
      </Markdown>
      {inProgressCourses.length > 0 && <CourseList title="In Progress Courses" courses={inProgressCourses} />}
      {completedCourses.length > 0 && <CourseList title="Completed Courses" courses={completedCourses} />}
    </PageLayout>
  )
}

export default CourseListScreen
