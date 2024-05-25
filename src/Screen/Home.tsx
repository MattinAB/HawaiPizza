import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeView } from "../const/SafeView";
import Button from "../component/Button";
import { AuthContext } from "../services/authentication/AuthenticationContext";

export default () => {
  const { onLogout, isAuthenticated } = useContext(AuthContext);

  return (
    <SafeView>
      <Image
        style={styles.image}
        source={require("../../assets/HawaiPizzaLogo.jpg")}
      />
      {isAuthenticated && (
        <View style={styles.button}>
          <Button title="Logout" onPress={() => onLogout()} />
        </View>
      )}
    </SafeView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    position: "absolute",
    left: "25%",
    top: "5%",
  },
  button: {
    position: "absolute",
    bottom: 10,
    width: "50%",
    left: "25%",
  },
});
