import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import DrawerHeader from "./DrawerHeader";

const CustomDrawer = (props) => {{
    return (
      <DrawerContentScrollView {...props}>
        <DrawerHeader/>
        <DrawerItemList {...props} /> {/* Drawer items below the header */}
      </DrawerContentScrollView>
    );
  }
}

export default CustomDrawer
