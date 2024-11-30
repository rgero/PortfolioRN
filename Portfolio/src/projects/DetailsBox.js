import { Button, Card, Text } from "react-native-paper"

import { Dimensions } from "react-native";
import { View } from "react-native-web"
import { openLink } from '../utils/openLink';

const DetailsBox = ({details}) => {
  const { width: screenWidth } = Dimensions.get('window');

  // If nothing is passed, return null
  if (details.website === "" && details.repo === "") return null
  
  return (
    <Card style={
      {
        width: screenWidth < 768 ? '75%' : '20%',
        alignSelf: "center"
      }
    }>
      <Card.Content>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: "flex-end"}}>
          <Text variant="bodyLarge">Links</Text>
          {details.repo && (
            <Button
              icon="folder"
              size={20}
              onPress={() => openLink(details.repo)}
            >
              Repository
            </Button>
          )}
          {details.website && (
            <Button
              icon="web"
              size={20}
              onPress={() => openLink(details.website)}
            >
              Website
            </Button>
          )}
        </View>
      </Card.Content>
    </Card>
  )
}

export default DetailsBox
