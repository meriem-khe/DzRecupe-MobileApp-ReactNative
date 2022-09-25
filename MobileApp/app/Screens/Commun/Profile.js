import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { Color } from "../../../Config/Colors";
import { SCREEN_HEIGHT } from "../Offre/Home";
import { SCREEN_WIDTH } from "../Offre/Home";

function Profile(props) {
  return (
    <SafeAreaView>
      {/** content starts here */}

      {/***************************************************************************** */}
      <Text
        style={{
          color: Color.bleu_foncé,
          textAlign: "left",
          fontSize: 16,
          padding: "4%",
        }}
      >
        Mon compte
      </Text>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Color.blanc,
          width: SCREEN_WIDTH - 50,
        }}
      >
        <SafeAreaView>
          <Image source={require("../../../assets/profile.jpg")} size={50} />
        </SafeAreaView>
        <SafeAreaView></SafeAreaView>
        <SafeAreaView></SafeAreaView>
        <SafeAreaView></SafeAreaView>
        <SafeAreaView></SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default Profile;
