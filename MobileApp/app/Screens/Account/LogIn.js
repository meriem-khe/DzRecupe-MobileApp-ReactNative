import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Color } from "../../../Config/Colors";
import PhoneInput from "react-native-phone-number-input";

//import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";

function LogIn({ navigation }) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [msgerr, setmsgerr] = useState("");
  const [moment, setmoment] = useState(false);

  return (
    <View style={styles.LoginStyle}>
      <SafeAreaView style={styles.LogoStyle}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../../../assets/Grand_logo.png")}
        />
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: Color.bleu_foncé,
            marginVertical: "10%",
            textAlign: "center",
            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          Se connecter
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.InputStyle}>
        <View>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: Color.bleu_foncé,
              textAlign: "left",
              fontSize: 17,
              marginBottom: "3%",
            }}
          >
            Téléphone
          </Text>
        </View>
        <PhoneInput
          defaultValue={value}
          defaultCode="DZ"
          layout="first"
          placeholder=" "
          onChangeText={(text) => {
            setValue(text);
            setmoment(false);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          countryPickerProps={{ withAlphaFilter: true }}
          withShadow
          autoFocus
          style={{
            width: "150%",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Text
          style={{ color: "red", textAlign: "left", paddingVertical: "3%" }}
        >
          {moment && msgerr}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (value === "") {
              setmsgerr("vous devez introduire un numéro de téléphone");
              setmoment(true);
            } else if (value.length < 10 || value.length > 10) {
              setmsgerr("vous devez introduire un numéro de 10 chiffres");
              setmoment(true);
            } else {
              navigation.navigate("CodeVer", {
                num: value,
                // TODO - send SMS!
              });
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
            Se connecter
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.google}>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: Color.bleu_foncé,
            fontSize: 17,
          }}
        >
          Ou connectez vous avec Google
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.CompteInex}>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: Color.bleu_foncé,
          }}
        >
          Vous n'avez pas un compte?
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: Color.vert,
            paddingTop: 10,
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Inscrivez vous
        </Text>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  LoginStyle: {
    backgroundColor: Color.gris_background,
    width: "100%",
    height: "100%",
    paddingTop: "15%",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
  },
  LogoStyle: {
    alignSelf: "center",
  },
  InputStyle: {},
  button: {
    marginTop: 20,
    height: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  CompteInex: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
    marginHorizontal: "7%",
  },
  google: { marginVertical: "10%" },
});
export default LogIn;
/*<GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          disabled={this.state.isSigninInProgress}
        />*/
