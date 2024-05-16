import ResturantInfo from "./src/Screen/ResturantInfo";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { TabNavigation } from "./src/navigation/TabNavigation";
import NavigationTheme from "./src/navigation/NavigationTheme";
import { RestaurantProvider } from "./src/services/restaurant/restaurantContext";

export default function App() {
  const [latoLoad] = useLato({ Lato_400Regular });
  const [oswaldLoad] = useOswald({ Oswald_400Regular });
  if (!latoLoad || !oswaldLoad) {
    return null;
  }

  return (
    <NavigationContainer theme={NavigationTheme}>
      <RestaurantProvider>
        <TabNavigation />
      </RestaurantProvider>
    </NavigationContainer>
  );
}
