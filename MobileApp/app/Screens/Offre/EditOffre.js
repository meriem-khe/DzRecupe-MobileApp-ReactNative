import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import { Color } from "../../../Config/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import matière from "../../Data/matière.json";
import qualité from "../../Data/qualité.json";
import Localisation from "../../Data/Localisation.json";
import SelectDropdown from "react-native-select-dropdown";
import { RadioButton } from "react-native-paper";
import { SCREEN_HEIGHT } from "./Home";
import { SCREEN_WIDTH } from "./Home";

function EditOffre({ route, navigation }) {
  /*****************************************EXPLICATION********************************************** */
  //on peut rendre cette page dynamique : on rajoute un useeffect et on ramene les données de la bdd
  //à la place des données statiques matière , livraison, localisation,et qualité
  //tout comme dans la page soumettre offre
  //petite difference c'est que il faut ramener les vrais données de l'offre que je veux éditer(c'est fait)

  /////////les erreurs syntaxique sans vérifiées , les champs obligatoires aussi
  ////////il reste que comment enregistrer les modifications faites sur l'offre dans la bdd(fonction backend à implémenter)
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  const { OffreInfo } = route.params;
  console.log(OffreInfo);
  const [clicked, setclicked] = useState(false);
  const [formData, setformData] = useState({
    matière: JSON.stringify(OffreInfo.mat),
    qualité: JSON.stringify(OffreInfo.qualité),
    wilaya: JSON.stringify(OffreInfo.localisation),
    commune: JSON.stringify(OffreInfo.localisation),
    livraison: OffreInfo.livraison,
    poids: JSON.stringify(OffreInfo.poids),
    prix: JSON.stringify(OffreInfo.prix),
  });
  const onChangeField = (name, text) => {
    setformData({
      ...formData,
      [name]: text,
    });
  };

  const validatedata = () => {
    setclicked(true);
    if (
      !(
        formData.commune === "" ||
        formData.wilaya === "" ||
        formData.qualité === "" ||
        formData.matière === "" ||
        formData.livraison === "" ||
        formData.prix === "" ||
        formData.poids === ""
      )
    ) {
      alert("Les modifications sont enregistrées");
      setclicked(false);
      ////mettre à jour la table en BDD selon formData.ID
      navigation.navigate("MesOffres");
    }
  };
  return (
    <ScrollView style={styles.bigcontainer}>
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
        Editez l'offre.
      </Text>
      {/***************************************************************************** */}

      {/*Form starts here*/}

      {/*/First part of the form
            //////////////////////////////////////////*/}

      <SafeAreaView style={styles.formcontainer}>
        {/**first dropdown input */}
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: Color.bleu_foncé,
              textAlign: "left",
              fontSize: 16,
              padding: "4%",
            }}
          >
            Matériel
          </Text>
          <SelectDropdown
            buttonStyle={styles.innerdrop}
            data={matière}
            buttonTextStyle={{ color: Color.vert }}
            dropdownStyle={{
              width: "50%",
              position: "absolute",
              left: "25%",
              right: "25%",
            }}
            selectedRowTextStyle={{ color: Color.vert }}
            selectedRowStyle={{ backgroundColor: Color.gris_background }}
            defaultButtonText={formData.matière ? formData.matière : "matériel"}
            onSelect={(selectedItem, index) => {
              onChangeField("matière", selectedItem);
            }}
            dropdownIconPosition="right"
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            renderDropdownIcon={() => (
              <Icon name="chevron-down" size={15} color={Color.vert} />
            )}
          />
        </SafeAreaView>
        <SafeAreaView>
          <Text
            style={{
              color: "red",
              textAlign: "left",
              fontSize: 13,
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            {!formData.matière && clicked
              ? "Indiquez le type de la matière que vous allez offrir"
              : ""}
          </Text>
        </SafeAreaView>
        {/**2nd dropdown input */}
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: Color.bleu_foncé,
              textAlign: "left",
              fontSize: 16,
              padding: "4%",
            }}
          >
            Qualité
          </Text>
          <SelectDropdown
            buttonStyle={styles.innerdrop}
            data={qualité}
            buttonTextStyle={{ color: Color.vert }}
            dropdownStyle={{
              width: "50%",
              position: "absolute",
              left: "25%",
              right: "25%",
            }}
            selectedRowTextStyle={{ color: Color.vert }}
            selectedRowStyle={{ backgroundColor: Color.gris_background }}
            defaultButtonText={formData.qualité ? formData.qualité : "qualité"}
            onSelect={(selectedItem, index) => {
              onChangeField("qualité", selectedItem);
            }}
            dropdownIconPosition="right"
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            renderDropdownIcon={() => (
              <Icon name="chevron-down" size={15} color={Color.vert} />
            )}
          />
        </SafeAreaView>
        <SafeAreaView>
          <Text
            style={{
              color: "red",
              textAlign: "left",
              fontSize: 13,
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            {formData.qualité === "" && clicked
              ? "veuillez définir la qualité de votre matériel"
              : ""}
          </Text>
        </SafeAreaView>
        {/**3rd dropdown input */}
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: Color.bleu_foncé,
              textAlign: "left",

              fontSize: 16,
              padding: "4%",
            }}
          >
            Wilaya
          </Text>
          <SelectDropdown
            buttonStyle={styles.innerdrop}
            data={Localisation}
            buttonTextStyle={{ color: Color.vert }}
            dropdownStyle={{
              width: "50%",
              position: "absolute",
              left: "25%",
              right: "25%",
            }}
            selectedRowTextStyle={{ color: Color.vert }}
            selectedRowStyle={{ backgroundColor: Color.gris_background }}
            defaultButtonText={formData.wilaya ? formData.wilaya : "wilaya"}
            search={true}
            onSelect={(selectedItem, index) => {
              onChangeField("wilaya", selectedItem);
            }}
            dropdownIconPosition="right"
            searchInputStyle={{ width: "170%" }}
            renderSearchInputRightIcon={() => (
              <Icon name="search" size={15} color={Color.gris_écriture} />
            )}
            searchPlaceHolder="chercher la wilaya"
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            renderDropdownIcon={() => (
              <Icon name="chevron-down" size={15} color={Color.vert} />
            )}
          />
        </SafeAreaView>
        <SafeAreaView>
          <Text
            style={{
              color: "red",
              textAlign: "left",
              fontSize: 13,
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            {!formData.wilaya && clicked
              ? "veuillez indiquer votre wilaya de résidence"
              : ""}
          </Text>
        </SafeAreaView>
        {/**4th dropdown input */}
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: 25,
          }}
        >
          {/**Label */}
          <Text
            style={{
              color: Color.bleu_foncé,
              textAlign: "left",
              fontSize: 16,
              padding: "4%",
            }}
          >
            Commune
          </Text>
          {/**Dropdown */}
          <SelectDropdown
            buttonStyle={styles.innerdrop}
            data={Localisation}
            buttonTextStyle={{ color: Color.vert }}
            dropdownStyle={{
              width: "50%",
              position: "absolute",
              left: "25%",
              right: "25%",
            }}
            selectedRowTextStyle={{ color: Color.vert }}
            selectedRowStyle={{ backgroundColor: Color.gris_background }}
            defaultButtonText={formData.commune ? formData.commune : "commune"}
            search={true}
            onSelect={(selectedItem, index) => {
              onChangeField("commune", selectedItem);
            }}
            dropdownIconPosition="right"
            searchInputStyle={{ width: "170%" }}
            renderSearchInputRightIcon={() => (
              <Icon name="search" size={15} color={Color.gris_écriture} />
            )}
            searchPlaceHolder="chercher la commune"
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            renderDropdownIcon={() => (
              <Icon name="chevron-down" size={15} color={Color.vert} />
            )}
          />
        </SafeAreaView>
        <SafeAreaView>
          {/**error msg */}
          <Text
            style={{
              color: "red",
              textAlign: "left",
              fontSize: 13,
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            {!formData.commune && clicked
              ? "veuillez indiquer votre commune de résidence"
              : ""}
          </Text>
        </SafeAreaView>

        {/****************************/}
        <SafeAreaView>
          <Text
            style={{
              color: Color.bleu_foncé,
              textAlign: "left",
              fontSize: 16,
              paddingHorizontal: "4%",
            }}
          >
            Livraison
          </Text>
          <SafeAreaView>
            <RadioButton.Group
              onValueChange={(value) => onChangeField("livraison", value)}
              value={formData.livraison}
            >
              <RadioButton.Item
                label="Oui"
                value="oui"
                position={"leading"}
                color={Color.vert}
                labelStyle={{ fontSize: 14 }}
              />
              <RadioButton.Item
                label="Non"
                value="non"
                position={"leading"}
                color={Color.vert}
                labelStyle={{ fontSize: 14 }}
              />
            </RadioButton.Group>
          </SafeAreaView>

          <Text
            style={{
              color: "red",
              textAlign: "left",
              fontSize: 13,
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            {!formData.livraison && clicked
              ? "indiquez vous allez pouvoir livrer le matériel ou pas"
              : ""}
          </Text>
        </SafeAreaView>
        {/**second text input */}
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/**Label */}
          <Text
            style={{
              color: Color.bleu_foncé,
              textAlign: "left",
              fontSize: 16,
              padding: "4%",
            }}
          >
            Poids
          </Text>
          {/**input container */}
          <TextInput
            value={formData.poids}
            style={styles.innerdrop2}
            placeholder="Poids KG"
            onChangeText={(text) => {
              onChangeField("poids", text);
            }}
            keyboardType={"numeric"}
          />
        </SafeAreaView>
        <SafeAreaView>
          {/**error message */}
          <Text
            style={{
              color: "red",
              textAlign: "left",
              fontSize: 13,
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            {!formData.poids && clicked ? "indiquez le poids" : ""}
          </Text>
        </SafeAreaView>
        {/**third text input */}
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              color: Color.bleu_foncé,
              textAlign: "left",
              fontSize: 16,
              padding: "4%",
            }}
          >
            Prix
          </Text>
          <TextInput
            style={styles.innerdrop2}
            value={formData.prix}
            placeholder="Prix DA"
            onChangeText={(text) => {
              onChangeField("prix", text);
            }}
            keyboardType={"numeric"}
          />
        </SafeAreaView>
        <SafeAreaView>
          <Text
            style={{
              color: "red",
              textAlign: "left",
              fontSize: 13,
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            {!formData.prix && clicked ? "indiquez le prix" : ""}
          </Text>
        </SafeAreaView>

        {/*End of the second part of the form*/}
      </SafeAreaView>
      {/**Button to validate the form 'submit' */}
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={validatedata}
          style={{
            marginBottom: 20,
            marginRight: 20,
            width: 130,
            borderRadius: 20,
            backgroundColor: Color.vert,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Color.blanc,
              textAlign: "left",
              fontSize: 16,
              padding: "7%",
            }}
          >
            Sauvegarder
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      {/*/ end of the form*/}

      {/***************************************************************************** */}
      {/*End of Content*/}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    backgroundColor: Color.gris_background,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },

  lefticon: {
    padding: "6%",
  },
  dropdown: {
    borderColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    paddingHorizontal: "5%",
    paddingTop: "1%",
  },
  innerdrop: {
    width: 200,
    marginHorizontal: "4%",
    height: 50,
    backgroundColor: Color.gris_background,
    borderRadius: 25,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "2%",
  },
  innerdrop2: {
    width: 240,
    marginHorizontal: "4%",
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: Color.gris_background,
    borderRadius: 25,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchicon: {
    backgroundColor: Color.vert,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: 50,
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: Color.blanc,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  formcontainer: {
    backgroundColor: Color.blanc,
    shadowOffset: { width: -2, height: "12%" },
    shadowColor: Color.gris_gris,
    shadowOpacity: 0.4,
    margin: "5%",
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  formcontainer2: {
    backgroundColor: Color.blanc,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default EditOffre;
