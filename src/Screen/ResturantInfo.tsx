import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SearchBar } from "../component/SearchBar";
import { SafeView } from "../const/SafeView";
import { StatusBar } from "expo-status-bar";
import { ResturantCard } from "../component/ResturantCard";
import { RestaurantContext } from "../services/restaurant/restaurantContext";

export default () => {
  const restaurantContext = useContext(RestaurantContext);
  const resturat = [
    {
      id: 1,
      name: "Hawai Pizza",
      images: [
        "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
      ],
      address: "Krada Maream",
      rating: 3.2,
      isOpenNow: true,
      isClosedTemporarily: true,
    },
    {
      id: 2,
      name: "Margreta",
      images: [
        "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
      ],
      address: "Krada Maream",
      rating: 5,
      isOpenNow: true,
      isClosedTemporarily: false,
    },
    {
      id: 3,
      name: "Kebab Pizza",
      images: [
        "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
      ],
      address: "Krada Maream",
      rating: 2.2,
      isOpenNow: true,
      isClosedTemporarily: true,
    },
    {
      id: 4,
      name: "Hawai Special",
      images: [
        "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
      ],
      address: "Krada Maream",
      rating: 4.3,
      isOpenNow: true,
      isClosedTemporarily: false,
    },
  ];
  return (
    <>
      <SafeView>
        <View style={styles.searchBar}>
          <SearchBar placeholder="Search" />
        </View>

        <FlatList
          data={restaurantContext.restaurants}
          /*keyExtractor take uniqe key and render the item certen theis key its  can  take item.name  */
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ResturantCard
              resturants={item}
              //     {
              //     name: item.name,
              //     photos: item.images,
              //     address: item.address,
              //     rating: item.rating,
              //     isOpenNow: item.isOpenNow,
              //     isCloseTemporary: item.isClosedTemporarily,
              //   }
              // }
            />
          )}
          contentContainerStyle={{ padding: 10, gap: 10 }}
        />
      </SafeView>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    // flex: 0.2,
  },
});
