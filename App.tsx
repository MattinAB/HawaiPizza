import React from "react";
import "react-native-gesture-handler";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { RestaurantProvider } from "./src/services/restaurant/restaurantContext";
import { LocationProvider } from "./src/services/location/locationContext";
import { Navigation } from "./src/navigation";
import { FavouriteProvider } from "./src/services/favourites/FavouritesContext";

const firebaseConfig = {
  apiKey: "AIzaSyD7QpAw16BsZPhgzvFbNkkhd9O9xcTOJb8",
  authDomain: "hawaipizzaab.firebaseapp.com",
  projectId: "hawaipizzaab",
  storageBucket: "hawaipizzaab.appspot.com",
  messagingSenderId: "51270696155",
  appId: "1:51270696155:web:28078f05f2a647304620fe",
};

// Initialize Firebase
// if (!firebase.getApps().length) {
export const app = firebase.initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
firebase.auth();

export default function App() {
  const [latoLoad] = useLato({ Lato_400Regular });
  const [oswaldLoad] = useOswald({ Oswald_400Regular });
  if (!latoLoad || !oswaldLoad) {
    return null;
  }

  return (
    <FavouriteProvider>
      <LocationProvider>
        <RestaurantProvider>
          <Navigation />
        </RestaurantProvider>
      </LocationProvider>
    </FavouriteProvider>
  );
}
