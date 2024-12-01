import LanguageAvatar from "../ui/LanguageAvatar"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

const ProjectButton = ({id, language}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() =>navigation.navigate('Project Details', { id: id }) }>
      <LanguageAvatar language={language}/>
    </TouchableOpacity>
  )
}

export default ProjectButton
