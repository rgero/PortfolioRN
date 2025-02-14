import PageLayout from "../components/ui/PageLayout";
import ProjectList from "../components/projects/ProjectList";
import Title from "../components/ui/Title";
import { View } from "react-native-web";
import { IconButton } from "react-native-paper";
import { RFPercentage } from "react-native-responsive-fontsize";
import { isMobile } from "../utils/isMobile";

const ProjectListScreen = () => {
  return (
    <PageLayout>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Title>Projects</Title>
        <View style={{flexDirection: "row", spacing: "5px", alignItems: "center"}}>
          {searchText.length > 0 && (
            <IconButton
              icon="close"
              size={isMobile() ? RFPercentage(3) : RFPercentage(2)}
              onPress={() => clearSearch(true)}
            />
          )}
          <IconButton
            icon="magnify"
            size={isMobile() ? RFPercentage(3) : RFPercentage(2)}
            onPress={() => setIsOpen(true)}
          />
        </View>

      </View>

      <ProjectList/>
    </PageLayout>
  );
}

export default ProjectListScreen
