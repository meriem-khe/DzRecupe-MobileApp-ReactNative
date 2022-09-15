import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SectionList,
  View,
  RefreshControl,
} from "react-native";

import { SearchBar } from "react-native-elements";
import { Color } from "../../../Config/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import matière from "../../Data/matière.json";
import qualité from "../../Data/qualité.json";
import Localisation from "../../Data/Localisation.json";
import SelectDropdown from "react-native-select-dropdown";
import elements from "../../Data/elements.json";

import PaginationDot from "react-native-animated-pagination-dot";

import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

//import ReactPaginate from "react-paginate";

function Home({ navigation, route }) {
  //Declaration des variables
  ///////////////////////////////////////////////

  const screenName = route.name;
  const livraison = ["oui", "non"];

  const [searchdata, setsearchdata] = useState(elements);
  const [searchValue, setsearchValue] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [Numpage, setNumpage] = useState(0);

  const numparpage = 10;
  const pagesvisitées = Numpage * numparpage;
  const pagecount = Math.ceil(searchdata.length / numparpage);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  ////////////////////////////////////////////////////////////////

  const DropList = [
    {
      key: "1",
      text: "Item text 1",
      data: ["bois", "ferreux", "plastique", "papier"],
      search: false,
      name: "matière",
    },
    {
      key: "2",
      text: "Item text 2",
      data: ["1 er choix", "2 ème choix", "3 ème choix"],
      search: false,
      name: "qualité",
    },
    {
      key: "3",
      text: "Item text 3",
      data: ["Alger", "Boumerdes", "Tizi Ouzou", "Blida"],
      search: true,
      name: "localisation",
    },
    {
      key: "4",
      text: "Item text 4",
      data: ["oui", "non"],
      search: false,
      name: "livraison",
    },
  ];
  const SECTIONS = [
    {
      title: "Choisissez un filtre",
      horizontal: true,
      data: DropList,
    },
    {
      title: "La liste des offres qui existent",
      horizontal: false,
      data: searchdata,
    },
  ];

  //Declaration des fonctions
  //////////////////////////////////////////////////////////////

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
              color: Color.bleu_foncé,
              fontSize: 16,
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
              width: "54%",
              paddingBottom: "3%",
            }}
          >
            <Text
              style={{
                color: Color.noir_leger,
                fontSize: 13,
              }}
            >
              {mat.slice(0, 1).toUpperCase() + mat.slice(1)}
            </Text>
            <Text
              style={{
                color: Color.noir_leger,
                fontSize: 13,
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
                  color: Color.noir_leger,
                  fontSize: 13,
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
              <Icon name="heart-o" size={20} color={Color.bleu_foncé} />
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
              <Icon name="heart" size={20} color={Color.bleu_foncé} />
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </TouchableOpacity>
    );
  };
  const Drop = ({ data, ifsearch, name }) => {
    return (
      <View style={styles.itemfiltre}>
        {ifsearch ? (
          <SelectDropdown
            buttonStyle={styles.innerdrop}
            data={data}
            buttonTextStyle={{ color: Color.vert }}
            dropdownStyle={{
              width: "50%",
              position: "absolute",
              left: "25%",
              right: "25%",
            }}
            selectedRowTextStyle={{ color: Color.vert }}
            selectedRowStyle={{ backgroundColor: Color.gris_background }}
            defaultButtonText={name}
            search={true}
            onSelect={(selectedItem, index) => {
              searchFunction(selectedItem);
            }}
            dropdownIconPosition="right"
            searchInputStyle={{ width: "170%" }}
            renderSearchInputRightIcon={() => (
              <Icon name="search" size={15} color={Color.gris_écriture} />
            )}
            searchPlaceHolder="Recherche"
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
        ) : (
          <SelectDropdown
            buttonStyle={styles.innerdrop}
            data={data}
            buttonTextStyle={{ color: Color.vert }}
            dropdownStyle={{
              width: "50%",
              position: "absolute",
              left: "25%",
              right: "25%",
            }}
            selectedRowTextStyle={{ color: Color.vert }}
            selectedRowStyle={{ backgroundColor: Color.gris_background }}
            defaultButtonText={name}
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
        )}
      </View>
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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setsearchdata(elements.slice(0, 10));
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.bigcontainer}>
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
        Consultez toutes les offres qui existent.
      </Text>
      {/***************************************************************************** */}

      {/**  SearchBar starts here */}
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "3%",
        }}
      >
        <SearchBar
          placeholder="Recherche..."
          containerStyle={{
            backgroundColor: "transparent",
            borderStyle: "solid",
            paddingHorizontal: "5%",
            width: "100%",
          }}
          searchIcon={true}
          clearIcon={true}
          rightIconContainerStyle={{ marginHorizontal: 40 }}
          inputContainerStyle={{
            width: "100%",
            backgroundColor: Color.blanc,
            height: 50,
            padding: "5%",
          }}
          lightTheme
          round
          value={searchValue}
          onChangeText={(text) => searchFunction(text)}
          autoCorrect={false}
        />
      </SafeAreaView>
      {/**End search bar */}

      {/***************************Data list**************************************** */}
      <View style={styles.container}>
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>

                {
                  //****************************Liste des filtres************************** */
                  section.horizontal ? (
                    <FlatList
                      data={section.data}
                      horizontal
                      renderItem={({ item }) => (
                        <Drop
                          data={item.data}
                          ifsearch={item.search}
                          name={item.name}
                        />
                      )}
                      showsHorizontalScrollIndicator={false}
                    />
                  ) : null
                }
              </>
            )}
            /**********************flatlist des offres qui existent********************** */
            renderItem={({ item, section }) => {
              if (section.horizontal) {
                return null;
              }
              return (
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
            }}
            onEndReached={() => (
              <PaginationDot
                activeDotColor={"black"}
                curPage={Numpage}
                maxPage={pagecount}
              />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </SafeAreaView>
      </View>

      {/****************************Load more btn************************************ */}

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

  innerdrop: {
    width: 160,
    height: 50,
    backgroundColor: Color.blanc,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontWeight: "normal",
    fontSize: 16,
    color: Color.bleu_foncé,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 7,
  },
  item: {
    width: SCREEN_WIDTH - 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Color.blanc,
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemfiltre: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 15,
  },
  itemText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
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
