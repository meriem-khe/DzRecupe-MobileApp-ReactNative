import React from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function DrawerContent(props) {
  const Num = "+213 557956402";

  const paperTheme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "C:UsersAdministratorDzRecupeappassetsprofile.jpg",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Utilisateur Offreur</Title>
                <Caption style={styles.caption}>{Num}</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="file-chart-outline" color={color} size={size} />
              )}
              label="Mes offres"
              onPress={() => {
                props.navigation.navigate("MesOffres");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="heart-box-outline" color={color} size={size} />
              )}
              label="MesFavories"
              onPress={() => {
                props.navigation.navigate("MesFavories");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="message-badge" color={color} size={size} />
              )}
              label="Messagerie"
              onPress={() => {
                props.navigation.navigate("Messagerie");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="map-marker-radius-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Map"
              onPress={() => {
                props.navigation.navigate("Map");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="help-circle-outline" color={color} size={size} />
          )}
          label="Aide"
          onPress={() => {
            props.navigation.navigate("Aide");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Se déconnecter"
          onPress={() => {
            //se déconnecter
            props.navigation.navigate("LogIn");
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
