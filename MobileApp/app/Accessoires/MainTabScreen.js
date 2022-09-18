import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "../Screens/Offre/Home";
import SoumettreOffre from "../Screens/Offre/SoumettreOffre";
import Map from "../Screens/Offre/Map";
import Notification from "../Screens/Commun/Notification";
import MesFavories from "../Screens/Offre/MesFavories";
import MesOffres from "../Screens/Offre/MesOffres";
import EditOffre from "../Screens/Offre/EditOffre";

import { Color } from "../../Config/Colors";

const HomeStack = createStackNavigator();
const NotifStack = createStackNavigator();
const SoumettreOffreStack = createStackNavigator();
const MapStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Acceuil",
        tabBarColor: Color.bleu_foncé,
        tabBarIcon: ({ color }) => <Icon name="home" color={color} size={24} />,
      }}
    />
    <Tab.Screen
      name="Offre"
      component={SoumettreOffreStackScreen}
      options={{
        tabBarLabel: "Offre",
        tabBarColor: Color.bleu_foncé,
        tabBarIcon: ({ color }) => (
          <Icon name="plus-circle" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotifStackScreen}
      options={{
        tabBarLabel: "Notifications",
        tabBarColor: Color.bleu_foncé,
        tabBarIcon: ({ color }) => <Icon name="bell" color={color} size={24} />,
      }}
    />

    <Tab.Screen
      name="Map"
      component={MapStackScreen}
      options={{
        tabBarLabel: "Map",
        tabBarColor: Color.bleu_foncé,
        tabBarIcon: ({ color }) => (
          <Icon name="map-marker" color={color} size={24} />
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
        fontWeight: "normal",
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
    <HomeStack.Screen
      name="MesFavories"
      component={MesFavories}
      options={{
        title: "Mes Favories",
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
    <HomeStack.Screen
      name="MesOffres"
      component={MesOffres}
      options={{
        title: "Mes offres",
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
    <HomeStack.Screen
      name="EditOffre"
      component={EditOffre}
      options={{
        title: "Editer offre",
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
        backgroundColor: Color.bleu_foncé,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "normal",
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
            backgroundColor={Color.bleu_foncé}
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </NotifStack.Navigator>
);
//////////////////////////////
const SoumettreOffreStackScreen = ({ navigation }) => (
  <SoumettreOffreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Color.bleu_foncé,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "normal",
      },
    }}
  >
    <SoumettreOffreStack.Screen
      name="SoumettreOffre"
      component={SoumettreOffre}
      options={{
        title: "Soumettre une nouvelle offre",
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
  </SoumettreOffreStack.Navigator>
);
//
const MapStackScreen = ({ navigation }) => (
  <MapStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Color.bleu_foncé,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "normal",
      },
    }}
  >
    <MapStack.Screen
      name="Map"
      component={Map}
      options={{
        title: "Map",
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
  </MapStack.Navigator>
);
