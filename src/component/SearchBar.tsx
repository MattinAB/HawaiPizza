import React from "react";
import { View, TextInput, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../const/theme/colors";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  onSubmitEditing: (value: any) => void;
  style?: ViewStyle;
  icon?: string;
  onIconPress: () => void;
}
export const SearchBar = ({
  value,
  onChangeText,
  placeholder,
  onSubmitEditing,
  style,
  icon = "search1",
  onIconPress,
  ...otherProps
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <AntDesign
        onPress={onIconPress}
        style={{ marginRight: 5 }}
        name={icon}
        size={20}
        color="red"
      />
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
    flexDirection: "row",
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 20,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});
