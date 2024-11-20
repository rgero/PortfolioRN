import { Divider, Surface, Text } from "react-native-paper";
import { ScrollView, View } from "react-native-web";

const HomeScreen = () => {
  return (
    <Surface style={{ flex: 1, alignItems: 'center', }}>
      <ScrollView 
        style={{ flex: 1, width: "90%" }}
        showsVerticalScrollIndicator={false}
      >
        <Text variant="displayLarge" style={{alignSelf: 'center'}}>Welcome to Roymond.NET</Text>
        <Divider/>
        <Text variant="bodyMedium" style={{marginBottom: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis felis non nisl laoreet tincidunt. Maecenas nec risus vitae purus venenatis vestibulum ac id dui. Nunc viverra justo neque. Maecenas id fringilla nunc. Nulla dapibus aliquam laoreet. Nunc vel laoreet tellus. Morbi sit amet tortor cursus ipsum tincidunt gravida. Donec eu tortor eu lacus pharetra luctus. Morbi eget magna elementum, volutpat lectus at, rhoncus neque. Cras at risus in ex vulputate facilisis. Phasellus porta velit massa, nec efficitur elit volutpat ac. Pellentesque quis bibendum mauris. Praesent sit amet posuere dolor. Duis volutpat posuere velit.</Text>
        <Text variant="bodyMedium" style={{marginBottom: 10}}>Nunc nunc diam, sodales vitae sem in, vehicula pretium eros. Proin sit amet luctus metus. Phasellus eu orci eu metus efficitur fringilla. Vestibulum hendrerit, nisl vel ullamcorper molestie, nibh nunc mollis urna, sit amet suscipit lectus nisi ut turpis. In euismod erat eu egestas mollis. Donec porta ante at enim condimentum maximus. Vivamus posuere nec tortor sit amet posuere. Maecenas tincidunt sapien orci, a ornare est iaculis in. Fusce pretium erat ut metus interdum consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus arcu orci, ultricies a tellus in, euismod aliquet velit. Donec non ullamcorper nisl. Ut quis ullamcorper nunc. Duis finibus cursus maximus. Vestibulum laoreet in urna non eleifend.</Text>
        <Text variant="bodyMedium" style={{marginBottom: 10}}>Sed vulputate ac justo et pulvinar. Quisque dapibus rutrum tortor, vitae sodales nibh. Cras mattis maximus magna, sed hendrerit urna suscipit ac. Proin nec pretium massa. Sed semper ac ante vitae placerat. Maecenas quam augue, ullamcorper id convallis vel, porta fringilla dolor. In hac habitasse platea dictumst. In sit amet quam eget mi venenatis iaculis. Vivamus a ex arcu. Proin scelerisque urna massa, nec aliquam dolor placerat eget. Curabitur pharetra volutpat diam in condimentum.</Text>
        <Text variant="bodyMedium" style={{marginBottom: 10}}>Sed dui magna, tristique vitae hendrerit nec, feugiat vitae ipsum. Nulla hendrerit iaculis ullamcorper. Curabitur ut pulvinar purus. Aliquam vulputate blandit augue. Aenean id auctor odio. Proin id pellentesque magna. Ut in pharetra justo. Phasellus convallis velit vel odio porta, vitae gravida massa varius.</Text>
        <Text variant="bodyMedium" style={{marginBottom: 10}}>In pretium lorem orci. Ut imperdiet aliquet felis non ultrices. Mauris eros nunc, eleifend tempus ullamcorper egestas, vulputate nec nisl. Morbi ut luctus mi. Aliquam congue nibh dictum consequat aliquam. Suspendisse gravida sapien nec laoreet sollicitudin. Fusce scelerisque, justo non commodo auctor, felis urna accumsan dolor, non vulputate metus augue id ex. Nullam diam libero, lobortis quis venenatis vitae, sodales nec tortor. Nunc quis iaculis ex. </Text>
      </ScrollView>
    </Surface>
  );
}

export default HomeScreen
