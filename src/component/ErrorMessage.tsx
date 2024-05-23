import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  visible: boolean;
  error: string;
}

export default function ErrorMessage({ visible, error }: Props) {
  if (!visible || !error) return null;
  return <Text style={styles.text}>{error}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 16,
  },
});
