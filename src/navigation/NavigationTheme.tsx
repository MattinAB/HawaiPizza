import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../const/theme/colors";

export default {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
