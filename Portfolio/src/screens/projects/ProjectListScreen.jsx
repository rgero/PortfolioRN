import { IconButton } from "react-native-paper";
import OptionsMenu from "../../components/ui/OptionsMenu";
import PageLayout from "../../components/ui/PageLayout";
import ProjectList from "../../components/projects/ProjectList";
import Title from "../../components/ui/Title";
import { View } from "react-native-web";
import { useProjectContext } from "../../context/ProjectContext";
import { useState } from "react";

const ProjectListScreen = () => {
  const {searchText, handleSearchChange} = useProjectContext();
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
      <OptionsMenu visible={visible} searchText={searchText} handleSearchChange={handleSearchChange} />
      <ProjectList />
    </PageLayout>
  );
};

export default ProjectListScreen;
