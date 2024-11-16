import { Card, IconButton, Text, useTheme } from "react-native-paper"

import LanguageAvatar from "../ui/LanguageAvatar"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const ProjectCard = ({index, title, language, short, id}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Card style={{width: "100%", marginBottom: 10, backgroundColor: (index % 2 != 0 ? theme.colors.backdrop : theme.colors.background)}}>
      <Card.Title 
        title={title} 
        subtitle={language} 
        left={() => <LanguageAvatar language={language.toLowerCase()}/>}
        right={(props) => {
          return (
            <IconButton 
              {...props} 
              icon={() => <MaterialIcons name="open-in-browser" size={24} color={theme.colors.primary} />} 
              onPress={() =>navigation.navigate('Project Details', { id: id }) }
            />
          )}
        }
      />
      <Card.Content style={{ paddingTop: 10, paddingHorizontal: 50 }}>
        <Text variant="bodyMedium">{short}</Text>  
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
