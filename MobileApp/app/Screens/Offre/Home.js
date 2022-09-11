import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import { SearchBar } from "react-native-elements";
import { Color } from "../../../Config/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import matière from "../../Data/matière.json";
import qualité from "../../Data/qualité.json";
import Localisation from "../../Data/Localisation.json";
import SelectDropdown from "react-native-select-dropdown";
import elements from "../../Data/elements.json";

//import ReactPaginate from "react-paginate";

function Home({ navigation, route }) {
  //Declaration des variables
  ///////////////////////////////////////////////

  const screenName = route.name;
  const livraison = ["oui", "non"];

  const [searchdata, setsearchdata] = useState(elements);
  const [searchValue, setsearchValue] = useState("");
  //const [refreshing, setRefreshing] = useState(true);
  const [Numpage, setNumpage] = useState(0);

  const numparpage = 10;
  const pagesvisitées = Numpage * numparpage;
  const pagecount = Math.ceil(searchdata.length / numparpage);

  //Declaration des fonctions
  //////////////////////////////////////////////////////////////

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      mat={item.mat}
      localisation={item.localisation}
      qualité={item.qualité}
      livraison={item.livraison}
      photo={item.photo}
      favorie={item.favorie}
    />
  );
  const Item = ({
    title,
    mat,
    localisation,
    qualité,
    livraison,
    photo,
    favorie,
  }) => {
    const [fav, setfav] = useState(favorie === 0 ? true : false);
    return (
      <TouchableOpacity style={styles.item}>
        <SafeAreaView
          style={{
            width: "60%",
            paddingHorizontal: "12%",
          }}
        >
          <Image
            style={{ width: 100, height: 100, borderRadius: 15 }}
            source={require("../../../assets/garbage.jpg")}
          />
        </SafeAreaView>
        <SafeAreaView>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: Color.bleu_foncé,
              fontSize: 17,
              paddingBottom: "5%",
            }}
          >
            {title.slice(0, 1).toUpperCase() + title.slice(1)}
          </Text>
          <SafeAreaView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "55%",
              paddingBottom: "3%",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: Color.noir_leger,
                fontSize: 14,
              }}
            >
              {mat.slice(0, 1).toUpperCase() + mat.slice(1)}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: Color.noir_leger,
                fontSize: 14,
              }}
            >
              {qualité.slice(0, 1).toUpperCase() + qualité.slice(1)}
            </Text>
          </SafeAreaView>
          <SafeAreaView
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "70%",
              paddingBottom: "2%",
            }}
          >
            <SafeAreaView
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "55%",
              }}
            >
              <Icon name="map-marker" size={20} color={Color.gris_gris} />
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: Color.noir_leger,
                  fontSize: 14,
                }}
              >
                {localisation.slice(0, 1).toUpperCase() + localisation.slice(1)}
              </Text>
            </SafeAreaView>

            {livraison === "oui" ? (
              <Text style={{ color: Color.vert }}>Livraison disponible</Text>
            ) : (
              <Text style={{ color: "red" }}>Livraison non disponible</Text>
            )}
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={{ paddingRight: 40, paddingBottom: 90 }}>
          {!fav ? (
            <TouchableOpacity
              onPress={() => {
                setfav(!fav);
                alert(
                  "l'offre est ajoutée aux favorie"
                ); /* changer l'etat en bdd  */
              }}
            >
              <Icon name="heart-o" size={20} color={Color.gris_gris} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={
                () => {
                  setfav(!fav);
                  alert("l'offre n'est plus favorie");
                } /* changer l'etat en bdd  */
              }
            >
              <Icon name="heart" size={20} color={Color.gris_gris} />
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </TouchableOpacity>
    );
  };
  const searchFunction = (text) => {
    if (text) {
      const newData = searchdata.filter(function (item) {
        const textData = text.toUpperCase();
        return (
          item.title.toUpperCase().indexOf(textData) > -1 ||
          item.mat.toUpperCase().indexOf(textData) > -1 ||
          item.localisation.toUpperCase().indexOf(textData) > -1 ||
          item.qualité.toUpperCase().indexOf(textData) > -1 ||
          item.livraison.toUpperCase().indexOf(textData) > -1
        );
      });
      setsearchdata(newData);
      setsearchValue(text);
    } else {
      setsearchdata(elements);
      setsearchValue(text);
    }
  };
  const pagechange = ({ selected }) => {
    setNumpage(selected);
  };

  /////////

  return (
    <SafeAreaView style={styles.bigcontainer}>
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
        Consultez toutes les offres qui existent.
      </Text>
      {/***************************************************************************** */}

      <SafeAreaView style={{ flexDirection: "column" }}>
        {/**  SearchBar starts here */}
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "23%",
            width: "70%",
            marginBottom: "3%",
          }}
        >
          <SearchBar
            placeholder="Recherche..."
            containerStyle={{
              backgroundColor: "transparent",
              borderStyle: "solid",

              width: "100%",
            }}
            searchIcon={false}
            clearIcon={false}
            rightIconContainerStyle={{ marginHorizontal: 40 }}
            inputContainerStyle={{
              width: "100%",
              backgroundColor: Color.blanc,
              height: 50,
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            }}
            lightTheme
            round
            value={searchValue}
            onChangeText={(text) => searchFunction(text)}
            autoCorrect={false}
          />
          <SafeAreaView style={styles.searchicon}>
            <Icon name="search" size={25} color={Color.gris_gris} />
          </SafeAreaView>
        </SafeAreaView>
        {/**End search bar */}

        {/***************************************************************************** */}

        {/** filters dropdown */}
        <SafeAreaView style={styles.dropdown} accessibilityRole="scrollbar">
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
            defaultButtonText="matière"
            onSelect={(selectedItem, index) => {
              searchFunction(selectedItem);
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
            defaultButtonText="qualité"
            onSelect={(selectedItem, index) => {
              searchFunction(selectedItem);
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
            defaultButtonText="localisation"
            search={true}
            onSelect={(selectedItem, index) => {
              searchFunction(selectedItem);
            }}
            dropdownIconPosition="right"
            searchInputStyle={{ width: "170%" }}
            renderSearchInputRightIcon={() => (
              <Icon name="search" size={15} color={Color.gris_écriture} />
            )}
            searchPlaceHolder="chercher la localisation"
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
          <SelectDropdown
            buttonStyle={styles.innerdrop}
            data={livraison}
            buttonTextStyle={{ color: Color.vert }}
            dropdownStyle={{
              width: "50%",
              position: "absolute",
              left: "25%",
              right: "25%",
            }}
            selectedRowTextStyle={{ color: Color.vert }}
            selectedRowStyle={{ backgroundColor: Color.gris_background }}
            defaultButtonText="Livraison"
            onSelect={(selectedItem, index) => {
              searchFunction(selectedItem);
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
        {/**End filters dropdown */}
      </SafeAreaView>
      {/***************************************************************************** */}

      {/**********************flatlist des offres qui existent********************** */}
      <SafeAreaView style={{ flex: 1, marginTop: 20, marginBottom: "20%" }}>
        {/*refreshing ? <ActivityIndicator /> : null*/}
        <FlatList
          data={searchdata.slice(pagesvisitées, pagesvisitées + numparpage)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
          /* refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={setsearchdata(elements)}
            />
          }*/
        />
        {/*<div></div>
          <ReactPaginate
            previousLabel={"Prec"}
            nextLabel={"suiv"}
            pageCount={pagecount}
            onPageChange={pagechange}
            containerClassName={"containerall"}
            previousLinkClassName={"prec"}
            nextLinkClassName={"suiv"}
            disabledClassName={"disabled"}
            activeClassName={"isactive"}
          />
        </Text>*/}
      </SafeAreaView>
      {/***************************************************************************** */}
      {/*End of Content*/}
    </SafeAreaView>
  );
}

//styling

const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    backgroundColor: Color.gris_background,
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
    width: "33%",
    marginHorizontal: "1%",
    height: 50,
    backgroundColor: Color.blanc,
    borderRadius: 25,
    justifyContent: "center",
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
});

//////////////

export default Home;

/*contentContainerStyle
<ScrollView contentContainerStyle={styles.container}> */

/**import {RefreshControl} from 'react-native'
const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();

      var config = {
        method: "post",
        url: "http */

/**const onRefresh = useCallback(() => {
    setRefreshing(true);
  getDemands();
    setRefreshing(false);
  }, []); */
