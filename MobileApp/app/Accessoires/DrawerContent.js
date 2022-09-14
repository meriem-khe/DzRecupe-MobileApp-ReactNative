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
import { Color } from "../../Config/Colors";

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
                source={require("../../assets/profile.jpg")}
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
                <Icon
                  name="home-outline"
                  color={Color.bleu_foncé}
                  size={size}
                />
              )}
              label="Home"
              labelStyle={{ color: Color.bleu_foncé, fontSize: 15 }}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={Color.bleu_foncé}
                  size={size}
                />
              )}
              label="Profile"
              labelStyle={{ color: Color.bleu_foncé, fontSize: 15 }}
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="file-chart-outline"
                  color={Color.bleu_foncé}
                  size={size}
                />
              )}
              label="Mes offres"
              labelStyle={{ color: Color.bleu_foncé, fontSize: 15 }}
              onPress={() => {
                props.navigation.navigate("MesOffres");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="heart-box-outline"
                  color={Color.bleu_foncé}
                  size={size}
                />
              )}
              label="MesFavories"
              labelStyle={{ color: Color.bleu_foncé, fontSize: 15 }}
              onPress={() => {
                props.navigation.navigate("MesFavories");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="message-badge"
                  color={Color.bleu_foncé}
                  size={size}
                />
              )}
              label="Messagerie"
              labelStyle={{ color: Color.bleu_foncé, fontSize: 15 }}
              onPress={() => {
                props.navigation.navigate("Messagerie");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="map-marker-radius-outline"
                  color={Color.bleu_foncé}
                  size={size}
                />
              )}
              label="Map"
              labelStyle={{ color: Color.bleu_foncé, fontSize: 15 }}
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
            <Icon
              name="help-circle-outline"
              color={Color.bleu_foncé}
              size={size}
            />
          )}
          label="Aide"
          labelStyle={{ color: Color.bleu_foncé, fontSize: 15 }}
          onPress={() => {
            props.navigation.navigate("Aide");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={Color.bleu_foncé} size={size} />
          )}
          label="Se déconnecter"
          labelStyle={{ color: Color.bleu_foncé, fontSize: 15 }}
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
    fontWeight: "normal",
    color: Color.vert,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: Color.bleu_foncé,
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
