import { Button, Card, Text, useTheme } from "react-native-paper"

import { View } from "react-native-web"
import { openLink } from '../utils/openLink';

const DetailsBox = ({details}) => {
  const theme = useTheme();

  // If nothing is passed, return null
  if (details.website === "" && details.repo === "") return null
  return (
    <Card style={
      {
        alignSelf: "center",
        backgroundColor: theme.colors.backdrop
      }
    }>
      <Card.Content>
        <View style={{flex: 1, flexDirection: 'column', alignItems: "center", justifyContent: "space-between"}}>
          <Text variant="bodyLarge">Important Links</Text>
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
