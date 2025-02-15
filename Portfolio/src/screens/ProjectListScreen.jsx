import PageLayout from "../components/ui/PageLayout";
import ProjectList from "../components/projects/ProjectList";
import Title from "../components/ui/Title";
import { View } from "react-native-web";
import OptionsMenu from "../components/ui/OptionsMenu";
import { useState } from "react";

const ProjectListScreen = () => {
  const [visibleMenuVisible, setMenuVisible] = useState(false);
  return (
    <PageLayout>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Title>Projects</Title>
        <OptionsMenu visible={visibleMenuVisible} setVisible={setMenuVisible}/>
      </View>
      <ProjectList />
    </PageLayout>
  );
};

export default ProjectListScreen;
