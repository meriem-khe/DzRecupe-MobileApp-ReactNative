import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const RootStack = createStackNavigator();

import WelcomeScreen from "../Welcome/WelcomeScreen";
import Presentation1 from "../Welcome/Presentation1";
import Presentation2 from "../Welcome/Presentation2";
import LogIn from "../Account/LogIn";
import SignIn from "../Account/SignIn";
import CodeVer from "../Account/CodeVer";
//les ecrans de l'initialisation de l'application juste après l'installation de l'application
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none" initialRouteName="WelcomeScreen">
    <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <RootStack.Screen name="Presentation1" component={Presentation1} />
    <RootStack.Screen name="Presentation2" component={Presentation2} />
    <RootStack.Screen name="LogIn" component={LogIn} />
    <RootStack.Screen name="SignIn" component={SignIn} />
    <RootStack.Screen name="CodeVer" component={CodeVer} />
  </RootStack.Navigator>
);

export default RootStackScreen;
