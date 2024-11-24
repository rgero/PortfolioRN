import { ScrollView } from "react-native-web"
import { Surface } from "react-native-paper"

const PageLayout = ({children}) => {
  return (
    <Surface style={{ flex: 1, alignItems: 'center', }}>
      <ScrollView 
        style={{ flex: 1, width: "90%" }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </Surface>
  )
}

export default PageLayout
