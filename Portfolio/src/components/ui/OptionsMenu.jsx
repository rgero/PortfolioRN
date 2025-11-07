import { useEffect, useRef, useState } from "react";

import { Animated } from "react-native";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const OptionsMenu = ({ visible, searchText, handleSearchChange }) => {
  const [searchbarHeight, setSearchbarHeight] = useState(0); // Store Searchbar height
  const height = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(height, {
        toValue: visible ? searchbarHeight + 10 : 0, // Animate to measured height
        duration: 300,
        useNativeDriver: false, // Height animation needs `false`
      }),
      Animated.timing(opacity, {
        toValue: visible ? 1 : 0, // Fade in
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [visible, searchbarHeight]);

  return (
    <Animated.View style={[styles.container, { height, opacity }]}>
      <Searchbar
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearchChange}
        style={styles.searchbar}
        onLayout={(event) => setSearchbarHeight(event.nativeEvent.layout.height)} // Measure height
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden", // Prevents content from showing when collapsed
    alignItems: "center"
  },
  searchbar: {
    width: "95%",
  },
});

export default OptionsMenu;
