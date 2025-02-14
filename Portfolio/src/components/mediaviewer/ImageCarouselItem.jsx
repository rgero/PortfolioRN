import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const ImageCarouselItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Thumbnail Image */}
      <Image source={{ uri: item.src }} style={styles.image} resizeMode="contain" />
      <Button onPress={() => setModalVisible(true)}>
        Open Image
      </Button>

      {/* Fullscreen Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <MaterialIcons name="close" size={30} color="white" />
          </TouchableOpacity>
          <Image source={{ uri: item.src }} style={styles.fullscreenImage} resizeMode="contain" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    height: "auto",
    borderRadius: 10,
    cursor: "zoom-in",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenImage: {
    width: "90%",
    height: "90%",
    cursor: "zoom-out",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
});

export default ImageCarouselItem;
