import React, { useState } from "react";
import { View } from "react-native";
import { Menu, Searchbar, IconButton } from "react-native-paper";
import { isMobile } from "../../utils/isMobile";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useSearchContext } from "../../context/SearchContext";
import { KeyboardAvoidingView } from "react-native-web";

const OptionsMenu = () => {
  const [visible, setVisible] = useState(false);
  const {searchText, handleSearchChange} = useSearchContext();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton icon="magnify" onPress={openMenu} size={isMobile() ? RFPercentage(3) : RFPercentage(2)}/>
          }
          anchorPosition="bottom"
          contentStyle={{ width: 300, padding: "10px" }} // Controls menu width
        >
          <Searchbar
            placeholder="Search..."
            value={searchText}
            onChangeText={handleSearchChange}
            style={{ margin: 10, width: "95%" }}
          />
        </Menu>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OptionsMenu;
