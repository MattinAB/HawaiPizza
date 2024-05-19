import React from "react";
import { View, TextInput, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../const/theme/colors";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  onSubmitEditing: (value: any) => void;
  style?: ViewStyle;
}
export const SearchBar = ({
  value,
  onChangeText,
  placeholder,
  onSubmitEditing,
  style,
  ...otherProps
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 20,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});
