import React from "react";
import { StyleSheet } from "react-native";
import { AppText } from "../component/AppText";
import { SafeView } from "../const/SafeView";
export default () => {
  return (
    <SafeView>
      <AppText>This is Map Screen </AppText>
    </SafeView>
  );
};
