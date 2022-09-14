import React from "react";
import { StyleSheet } from "react-native";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import { DrawerContent } from "./app/Accessoires/DrawerContent";

import MainTabScreen from "./app/Accessoires/MainTabScreen";

import RootStackScreen from "./app/Screens/Commun/RootStackScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [islogedin, setislogedin] = React.useState(true);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {islogedin ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{ headerShown: false }}
          >
            <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
