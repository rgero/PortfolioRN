import * as React from "react";

import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { Dimensions, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import ImageCarouselItem from "./ImageCarouselItem";
import VideoCarouselItem from "./VideoCarouselItem";
import { isMobile } from "../../utils/isMobile";
import { useSharedValue } from "react-native-reanimated";

const width = Dimensions.get("window").width;
 
const ImageCarousel = ({media}) => {
  const theme = useTheme();
  const ref = React.useRef(null);
  const progress = useSharedValue(0);
  
  const onPressPagination = (index) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
 
  return (
    <View style={{flex: 1}}> 
      <Text style={{ fontSize: 20, paddingBottom: "5px" }}>Media</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        <Carousel
          ref={ref}
          width={isMobile() ? 0.6 * width : 0.4 * width}
          height={isMobile() ? 0.4 * width : 0.25 * width}
          data={media}
          onProgressChange={progress}
          renderItem={({ index }) => { 
            const targetItem = media[index];
            if (targetItem.type === "image") {
              return ( <ImageCarouselItem item={targetItem} /> );
            } else {
              return ( <VideoCarouselItem item={targetItem} /> );
            }
          }}
        />
        <Pagination.Basic
          progress={progress}
          data={media}
          dotStyle={{ 
            backgroundColor: "rgba(194, 194, 194, 0.2)", 
            borderRadius: 50 
          }}
          activeDotStyle={{ 
            backgroundColor: theme.colors.primary,
          }}
          containerStyle={{ gap: 5, marginTop: 10 }}
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
}

export default ImageCarousel;