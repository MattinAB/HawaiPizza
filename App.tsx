import ResturantInfo from "./src/Screen/ResturantInfo";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

export default function App() {
  const [latoLoad] = useLato({ Lato_400Regular });
  const [oswaldLoad] = useOswald({ Oswald_400Regular });
  if (!latoLoad || !oswaldLoad) {
    return null;
  }

  return <ResturantInfo />;
}
