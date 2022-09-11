import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Color } from "../../../Config/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.welcomestyle}>
      <SafeAreaView style={styles.skipstyle}>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: "white",
            textAlign: "right",
          }}
          onPress={() => navigation.navigate("LogIn")}
        >
          Skip
        </Text>
      </SafeAreaView>

      <SafeAreaView style={styles.outsideskipstyle}>
        <SafeAreaView style={styles.logo}>
          <Image source={require("../../../assets/Grand_logo_white.png")} />
        </SafeAreaView>
        <SafeAreaView style={styles.welcometext}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontWeight: "bold",
              color: "white",
              fontSize: 23,
            }}
          >
            Bienvenue sur DzRecupe
          </Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.lastcomponent}>
        <SafeAreaView style={styles.points}>
          <Text
            style={{
              backgroundColor: Color.noir_leger,
              width: 13,
              height: 13,
              borderRadius: 13,
            }}
          />
          <Text
            style={{
              backgroundColor: Color.blanc,
              width: 12,
              height: 12,
              borderRadius: 12,
            }}
          />
          <Text
            style={{
              backgroundColor: Color.blanc,
              width: 12,
              height: 12,
              borderRadius: 12,
            }}
          />
        </SafeAreaView>
        <TouchableOpacity
          style={styles.flèche}
          onPress={() => navigation.navigate("Presentation1")}
        >
          <Icon name="chevron-right" size={25} color={Color.noir_leger} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomestyle: {
    backgroundColor: Color.bleu_foncé,
    paddingTop: "15%",
    width: "100%",
    height: "100%",
  },
  skipstyle: {
    alignSelf: "stretch",
    paddingRight: "7%",
  },
  outsideskipstyle: {
    marginTop: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: "25%",
  },
  welcometext: {
    marginBottom: "60%",
  },
  lastcomponent: {
    marginRight: "7%",
    marginLeft: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "5%",
  },
  flèche: {
    backgroundColor: Color.blanc,
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    //alignSelf:'flex-end',
  },
  points: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default WelcomeScreen;
