import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "../Screens/Offre/Home";
import SoumettreOffre from "../Screens/Offre/SoumettreOffre";
import Map from "../Screens/Offre/Map";
import Notification from "../Screens/Commun/Notification";

import { Color } from "../../Config/Colors";

const HomeStack = createStackNavigator();
const NotifStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Acceuil",
        tabBarColor: Color.bleu_foncé,
        tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Offre"
      component={SoumettreOffre}
      options={{
        tabBarLabel: "Offre",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <Icon name="plus-circle" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotifStackScreen}
      options={{
        tabBarLabel: "Notifications",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => <Icon name="bell" color={color} size={26} />,
      }}
    />

    <Tab.Screen
      name="Explorer"
      component={Map}
      options={{
        tabBarLabel: "Explorer",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => (
          <Icon name="map-o" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Color.bleu_foncé,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: "Acceuil",
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor={Color.bleu_foncé}
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const NotifStackScreen = ({ navigation }) => (
  <NotifStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <NotifStack.Screen
      name="Notifications"
      component={Notification}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </NotifStack.Navigator>
);
