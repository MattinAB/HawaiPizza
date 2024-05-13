import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "./src/const/Screen";
import { SearchBar } from "./src/component/SearchBar";
import ResturantInfo from "./src/Screen/ResturantInfo";

export default function App() {
  return <ResturantInfo />;
}
