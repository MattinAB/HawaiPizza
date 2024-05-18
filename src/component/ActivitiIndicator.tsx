import * as React from "react";

import { StyleSheet, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={70} animating={true} color={MD2Colors.red400} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
