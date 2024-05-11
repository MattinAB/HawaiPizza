import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "./src/const/Screen";
import { SearchBar } from "./src/component/SearchBar";

export default function App() {
  return (
    <Screen style={styles.container}>
      <SearchBar placeholder="Search" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
