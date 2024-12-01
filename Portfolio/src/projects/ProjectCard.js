import { Card, IconButton, Text, useTheme } from "react-native-paper";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProjectButton from "./ProjectButton";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProjectCard = ({ index, title, languages, short, id }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Card style={{ width: "100%", marginBottom: 10, backgroundColor: (index % 2 !== 0 ? theme.colors.backdrop : theme.colors.background) }}>
      <Card.Title 
        title={
          <TouchableOpacity onPress={() => navigation.navigate('Project Details', { id })}>
            <Text style={{ color: theme.colors.primary }}>{title}</Text>
          </TouchableOpacity>
        }
        subtitle={languages.join(", ")}
        left={() => <ProjectButton id={id} language={languages[0].toLowerCase()} />}
        right={(props) => (
          <IconButton 
            {...props} 
            icon={() => <MaterialIcons name="open-in-browser" size={24} color={theme.colors.primary} />} 
            onPress={() => navigation.navigate('Project Details', { id })}
          />
        )}
      />
      <Card.Content style={{ paddingTop: 10, paddingHorizontal: 50 }}>
        <Text variant="bodyMedium">{short}</Text>  
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
