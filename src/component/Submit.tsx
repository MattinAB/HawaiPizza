import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { colors } from "../const/theme/colors";
import { AppText } from "./AppText";
import Styles from "../const/theme/styles";

interface Props {
  title: string;
}

export default ({ title }: Props) => {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
      <AppText style={Styles.Text}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.danger,
    // padding: 10,
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
});
