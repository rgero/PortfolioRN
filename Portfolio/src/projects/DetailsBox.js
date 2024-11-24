import { Button, Card, Text } from "react-native-paper"

import { View } from "react-native-web"

const DetailsBox = ({details}) => {

  return (
    <Card style={{width: "40%", alignSelf: "center"}}>
      <Card.Content>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: "flex-end"}}>
          <Text variant="bodyLarge">Links</Text>
          {details.repo && (
            <Button
              icon="folder"
              size={20}
              onPress={() => console.log('Pressed')}
            >
              Repository
            </Button>
          )}
          {details.website && (
            <Button
              icon="web"
              size={20}
              onPress={() => console.log('Pressed')}
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
