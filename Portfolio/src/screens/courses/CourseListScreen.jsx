import { IconButton, useTheme } from "react-native-paper";

import CourseList from "../../components/courses/CourseList";
import Markdown from "react-native-markdown-display";
import OptionsMenu from "../../components/ui/OptionsMenu";
import PageLayout from "../../components/ui/PageLayout";
import Title from "../../components/ui/Title";
import { View } from "react-native-web";
import courseIntroduction from "../../data/Courses";
import { useState } from "react";

const CourseListScreen = () => {
  const [visible, setVisible] = useState(false);
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
      <OptionsMenu visible={visible} />
      <Markdown style={{body: {color: theme.colors.onSurface}}}>
        {courseIntroduction}
      </Markdown>
      <CourseList title="In Progress Courses" filterFn={c => c.status !== 1} />
      <CourseList title="Completed Courses" filterFn={c => c.status === 1} />
    </PageLayout>
  )
}

export default CourseListScreen
