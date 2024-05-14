import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SearchBar } from "../component/SearchBar";
import { SafeView } from "../const/SafeView";
import { StatusBar } from "expo-status-bar";
import { ResturantCard } from "../component/ResturantCard";

export default () => {
  const resturat = [
    {
      id: 1,
      name: "Hawai Pizza",
      images: [
        "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
      ],
      address: "Krada Maream",
      rating: 3.2,
    },
    {
      id: 2,
      name: "Hawai Pizza",
      images: [
        "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
      ],
      address: "Krada Maream",
      rating: 5,
    },
    {
      id: 3,
      name: "Hawai Pizza",
      images: [
        "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
      ],
      address: "Krada Maream",
      rating: 2.2,
    },
    {
      id: 4,
      name: "Hawai Pizza",
      images: [
        "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
      ],
      address: "Krada Maream",
      rating: 4.3,
    },
  ];
  return (
    <>
      <SafeView>
        <View style={styles.searchBar}>
          <SearchBar placeholder="Search" />
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={resturat}
            renderItem={({ item }) => (
              <ResturantCard
                resturant={{
                  name: item.name,
                  photos: item.images,
                  address: item.address,
                  rating: item.rating,
                }}
              />
            )}
          />
        </View>
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
  flatList: {
    padding: 5,
    paddingVertical: 10,
  },
});
