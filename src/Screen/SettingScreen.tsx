import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeView } from "../const/SafeView";
import { AppText } from "../component/AppText";

export default () => {
  return (
    <SafeView>
      <AppText>Setting Secreen </AppText>
    </SafeView>
  );
};
