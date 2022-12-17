import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
} from "react-native";

import { SearchBar } from "react-native-elements";
import { Color } from "../../../Config/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import elements from "../../Data/elements.json";
import { Dimensions } from "react-native";
import { SCREEN_HEIGHT } from "./Home";
import { SCREEN_WIDTH } from "./Home";

function MesFavories(/** condition type de compte */) {
  /*****************************************EXPLICATION********************************************** */
  /** quand je ramène les données je n'est qu'à changer elements c'est tt searchdata je touche pas */
  /** Ces données vont dépondre de ce que je dois afficher , demmandes ou offres */
  /***je pourrais garder les memes pages pour les 3 types de compte , je dois juste rajouter des conditions */
  /***pour voir quel type de donnee à afficher */

  //Declaration des variables
  //////////

  const [searchdata, setsearchdata] = useState(elements);
  const [searchValue, setsearchValue] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [Numpage, setNumpage] = useState(1);
  const [message, setmessage] = useState("charger plus");
  const [lastborder, setlastborder] = useState(10);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

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
    return (
      <SafeAreaView>
        {favorie === 1 ? (
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
                  width: "55%",
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
                    {localisation.slice(0, 1).toUpperCase() +
                      localisation.slice(1)}
                  </Text>
                </SafeAreaView>

                {livraison === "oui" ? (
                  <Text style={{ color: Color.vert }}>
                    Livraison disponible
                  </Text>
                ) : (
                  <Text style={{ color: "red" }}>Livraison non disponible</Text>
                )}
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={{ paddingRight: 40, paddingBottom: 90 }}>
              <Icon name="heart" size={20} color={Color.gris_gris} />
            </SafeAreaView>
          </TouchableOpacity>
        ) : (
          <SafeAreaView />
        )}
      </SafeAreaView>
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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    searchFunction("");
    setmessage("charger plus");
    setNumpage(1);
    setlastborder(10);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  /////////////////////////////////////////

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
        Mes favories
      </Text>
      {/***************************************************************************** */}

      <SafeAreaView>
        {/***************Search bar ************ */}
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginHorizontal: "5%",
            marginBottom: "3%",
          }}
        >
          <SearchBar
            placeholder="Recherche..."
            containerStyle={{
              backgroundColor: "transparent",
              width: "100%",
            }}
            searchIcon={true}
            clearIcon={true}
            rightIconContainerStyle={{ marginHorizontal: 40 }}
            inputContainerStyle={{
              width: "100%",
              backgroundColor: Color.blanc,
              height: 50,
            }}
            lightTheme
            round
            value={searchValue}
            onChangeText={(text) => searchFunction(text)}
            autoCorrect={false}
          />
        </SafeAreaView>
        {/**************End Search bar************ */}
      </SafeAreaView>

      {/***************************************************************************** */}
      {/***************List of items mes favories******************* */}
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={searchdata.slice(0, lastborder)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
          ListFooterComponent={
            <TouchableOpacity
              style={{
                margin: 10,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              onPress={() => {
                if (Numpage * 10 + 10 > searchdata.length) {
                  setmessage("vous etes arrivés à la fin de la liste");
                  setlastborder(searchdata.length);
                  setNumpage(Numpage + 1);
                } else {
                  setmessage("charger plus");
                  setlastborder(Numpage * 10 + 10);
                  setNumpage(Numpage + 1);
                }
              }}
            >
              <Text style={{ color: Color.vert, fontSize: 15 }}>{message}</Text>
            </TouchableOpacity>
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </SafeAreaView>
      {/****************************end of flatlist*************************** */}
      {/***************************************************************************** */}
      {/*End of Content*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    backgroundColor: Color.gris_background,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
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
    width: SCREEN_WIDTH - 25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Color.blanc,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default MesFavories;
