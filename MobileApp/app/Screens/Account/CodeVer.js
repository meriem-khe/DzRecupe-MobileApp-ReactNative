import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Color } from "../../../Config/Colors";

function CodeVer({ route, navigation }) {
  const num = route.params.num;
  const [colorResend, setcolorResend] = useState(Color.bleu_clair);
  const [tabcode, settabcode] = useState([]);
  const [moment, setmoment] = useState(false);
  const [msgerr, setmsgerr] = useState("");
  console.log(tabcode);
  return (
    <SafeAreaView>
      <SafeAreaView
        style={{
          marginTop: "25%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 23,
            color: Color.bleu_foncé,
            paddingBottom: "13%",
            fontFamily: "Poppins-Medium",
          }}
        >
          Code de vérification
        </Text>
        <Text
          style={{
            color: Color.bleu_foncé,
            paddingBottom: "4%",
            fontFamily: "Poppins-Medium",
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Nous avons envoyé un code par sms à ce numéro
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 17,
            color: Color.bleu_foncé,
          }}
        >
          {num}
        </Text>
      </SafeAreaView>

      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "15%",
        }}
      >
        <TextInput
          style={{
            backgroundColor: Color.gris_écriture,
            width: 70,
            height: 70,
            borderRadius: 25,
            fontSize: 25,
            textAlign: "center",
          }}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => {
            let newArr = [...tabcode];
            newArr[0] = text;
            settabcode(newArr);
            setmoment(false);
          }}
        />
        <TextInput
          style={{
            backgroundColor: Color.gris_écriture,
            width: 70,
            height: 70,
            borderRadius: 25,
            fontSize: 25,
            textAlign: "center",
          }}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => {
            let newArr = [...tabcode];
            newArr[1] = text;
            settabcode(newArr);
            setmoment(false);
          }}
        />
        <TextInput
          style={{
            backgroundColor: Color.gris_écriture,
            width: 70,
            height: 70,
            borderRadius: 25,
            fontSize: 25,
            textAlign: "center",
          }}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => {
            let newArr = [...tabcode];
            newArr[2] = text;
            settabcode(newArr);
            setmoment(false);
          }}
        />

        <TextInput
          style={{
            backgroundColor: Color.gris_écriture,
            width: 70,
            height: 70,
            borderRadius: 25,
            fontSize: 25,
            textAlign: "center",
          }}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => {
            let newArr = [...tabcode];
            newArr[3] = text;
            settabcode(newArr);
            setmoment(false);
          }}
        />
      </SafeAreaView>
      <Text
        style={{ color: "red", textAlign: "center", paddingVertical: "7%" }}
      >
        {moment && msgerr}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          let bool = false;
          tabcode.forEach((element) => {
            if (element === "") {
              bool = true;
            }
          });
          if (tabcode.length === 4 && bool === false) {
            // TODO - vérifier le code !
            //à rajouter vérification si le code est correct backend
            navigation.navigate("Home");
          } else if (tabcode.length === 0) {
            setmsgerr("vous devez introduire le code");
            setmoment(true);
          } else {
            setmsgerr("le code doit contenir 4 chiffres");
            setmoment(true);
          }
        }}
      >
        <Text
          style={{
            color: Color.blanc,
            textAlign: "center",
            fontFamily: "Poppins-Medium",
            fontSize: 17,
          }}
        >
          Vérifier le code
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: colorResend,
          textAlign: "center",
          marginTop: "5%",
        }}
        onPress={() => {
          navigation.navigate("CodeVer", {
            num: num,
          });
          setcolorResend(Color.vert);
          Alert.alert(
            "code de vérification",
            "nous avons renvoyé le code à ce numéro " + num
          );
          //renvoyer le code par sms
        }}
      >
        Renvoyer le code
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 50,
    width: "70%",
    alignSelf: "center",
    marginTop: "2%",
    backgroundColor: Color.vert,
    borderRadius: 30,
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
export default CodeVer;
