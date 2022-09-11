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

function Presentation2({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.skipstyle}>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: Color.noir_leger,
            textAlign: "right",
          }}
          onPress={() => navigation.navigate("LogIn")}
        >
          Skip
        </Text>
      </SafeAreaView>

      <SafeAreaView style={styles.image_Presentation1}>
        <Image
          width="100%"
          source={require("../../../assets/presentation2_image.png")}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.sousimage}>
        <SafeAreaView style={styles.passage}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontWeight: "bold",
              color: Color.bleu_foncé,
              fontSize: 23,
              textAlign: "center",
              paddingBottom: "5%",
            }}
          >
            DzRecupe s'occupe de vos déchets
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: Color.noir_leger,
              fontSize: 17,
              textAlign: "center",
            }}
            numberOfLines={3}
          >
            Bénéficiez d'une gestion des offres et des demandes de déchets
            dédiés au recyclage
          </Text>
        </SafeAreaView>
        <SafeAreaView style={styles.dern_ligne}>
          <SafeAreaView style={styles.points}>
            <Text
              style={{
                backgroundColor: Color.gris_écriture,
                width: 13,
                height: 13,
                borderRadius: 13,
              }}
            />
            <Text
              style={{
                backgroundColor: Color.gris_écriture,
                width: 12,
                height: 12,
                borderRadius: 12,
              }}
            />
            <Text
              style={{
                backgroundColor: Color.noir_leger,
                width: 12,
                height: 12,
                borderRadius: 12,
              }}
            />
          </SafeAreaView>
          <TouchableOpacity
            style={styles.flèche}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Icon name="chevron-right" size={25} color={Color.noir_leger} />
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.gris_background,
    width: "100%",
    height: "100%",
    paddingTop: "15%",
  },
  skipstyle: {
    //flexDirection: "row",
    //justifyContent: "space-between",
    //alignItems: "center",
    //paddingLeft: "7%",
    //paddingRight: "7%",
    alignSelf: "stretch",
    paddingRight: "7%",
  },
  image_Presentation1: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  sousimage: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "110%",
  },
  passage: {
    paddingRight: "3%",
    paddingLeft: "3%",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },

  dern_ligne: {
    marginRight: "7%",
    marginLeft: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingTop: "25%",
    marginBottom: "5%",
  },
  flèche: {
    backgroundColor: Color.vert,
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

export default Presentation2;
