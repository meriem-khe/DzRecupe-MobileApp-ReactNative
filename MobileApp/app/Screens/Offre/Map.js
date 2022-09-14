import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Color } from "../../../Config/Colors";
function Map() {
  return (
    <SafeAreaView>
      {/** content starts here */}

      {/***************************************************************************** */}
      <Text
        style={{
          color: Color.bleu_foncé,
          textAlign: "left",
          fontFamily: "Poppins-Medium",
          fontSize: 17,
          padding: "4%",
        }}
      >
        Map
      </Text>
    </SafeAreaView>
  );
}

export default Map;
