import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { colors } from "../const/theme/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ErrorMessage from "./ErrorMessage";

export const TextInputField = ({ name, icon, ...otherProps }) => {
  const { handleChange, handleBlur, values, setFieldValue, touched, errors } =
    useFormikContext();
  return (
    <>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={{ marginRight: 10 }}
          name={icon}
          size={24}
          color={colors.medium}
        />
        <TextInput
          style={styles.textInput}
          value={values[name]}
          onBlur={(e) => handleBlur}
          onChangeText={(text) => setFieldValue(name, text)}
          {...otherProps}
        />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 10,
    width: "100%",
    marginVertical: 5,
  },
  textInput: {
    flex: 1,
  },
});
