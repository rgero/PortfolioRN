import { Divider, Text } from "react-native-paper"

import { RFPercentage } from "react-native-responsive-fontsize"
import { View } from "react-native-web"

const Subtitle = ({children}) => {
  return (
    <View style={{paddingVertical: 20,}}>
      <Text style={{alignSelf: "start", fontSize: RFPercentage(2) }}>
        {children}
      </Text>
      <Divider/>
    </View>

  )
}

export default Subtitle
