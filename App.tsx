import ResturantInfo from "./src/Screen/RestaurantInfo";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { RestaurantProvider } from "./src/services/restaurant/restaurantContext";
import { LocationProvider } from "./src/services/location/locationContext";
import { Navigation } from "./src/navigation";
import { FavouriteProvider } from "./src/services/favourites/FavouritesContext";

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
