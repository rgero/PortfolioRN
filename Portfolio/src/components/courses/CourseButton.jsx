import LanguageAvatar from "../ui/LanguageAvatar"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

const CourseButton = ({id, language}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() =>navigation.navigate('Course Details', { id: id }) }>
      <LanguageAvatar language={language}/>
    </TouchableOpacity>
  )
}

export default CourseButton
