import { Surface, Text } from "react-native-paper";

import ProjectList from "../projects/ProjectList";
import { View } from "react-native-web";

const ProjectListScreen = () => {
  return (
    <Surface style={{flex: 1, width: "100%" }}>
      <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', width: "90%"}}>
        <Text variant="displayLarge" style={{paddingVertical: 20, alignSelf: "start"}}>Projects</Text>
        <ProjectList/>
      </View>
    </Surface>
  );
}

export default ProjectListScreen
