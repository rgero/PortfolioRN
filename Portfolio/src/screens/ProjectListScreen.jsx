import PageLayout from "../components/ui/PageLayout";
import ProjectList from "../components/projects/ProjectList";
import Title from "../components/ui/Title";
import { View } from "react-native-web";
import OptionsMenu from "../components/ui/OptionsMenu";
import { useState } from "react";
import { IconButton } from "react-native-paper";

const ProjectListScreen = () => {
  const [visible, setVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <PageLayout>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Title>Projects</Title>
        <IconButton
          icon={visible ? "close" : "magnify"}
          onPress={toggleSearchVisibility}
          size={24}
        />
      </View>
      <OptionsMenu visible={visible} />
      <ProjectList />
    </PageLayout>
  );
};

export default ProjectListScreen;
