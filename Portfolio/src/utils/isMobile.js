import { Dimensions } from "react-native";

export const isMobile = () => {
  const { width: screenWidth } = Dimensions.get('window');
  return screenWidth <= 1000;
}