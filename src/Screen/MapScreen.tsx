import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { SearchBar } from "../component/SearchBar";
import { LocationContext } from "../services/location/locationContext";
import { RestaurantContext } from "../services/restaurant/restaurantContext";
import MapCallout from "../component/MapCallout";

interface Props {
  navigation: any;
}

export default ({ navigation }: Props) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <>
      <View style={styles.searchBar}>
        <SearchBar
          value={searchKeyword}
          onChangeText={(text) => setSearchKeyword(text)}
          onSubmitEditing={() => search(searchKeyword)}
          placeholder="Search for location "
        />
      </View>
      <MapView
        style={{ height: "100%" }}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant: any) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    width: "100%",
    position: "absolute",
    zIndex: 999,
    top: 50,
  },
});
