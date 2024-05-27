import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { View, Image, StyleSheet } from "react-native";
import { SafeView } from "../const/SafeView";
import { ActivityIndicator } from "react-native-paper";
import { TextInputField } from "../component/TextInput";
import * as Yup from "yup";
import Submit from "../component/Submit";
import { AuthContext } from "../services/authentication/AuthenticationContext";
import ErrorMessage from "../component/ErrorMessage";
import "firebase/compat/auth";
import Button from "../component/Button";
import { colors } from "../const/theme/colors";

interface Props {
  navigation: any;
}
interface SubmitProps {
  email: string;
  password: string;
}

export default ({ navigation }: Props) => {
  const [loginFaild, setLoginFaild] = useState(false);
  const { onLogin, error, isLoading } = useContext(AuthContext);

  const validationShcema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
  });
  const handleSubmit = async ({ email, password }: SubmitProps) => {
    await onLogin(email, password);

    if (error) return setLoginFaild(true);

    setLoginFaild(false);
  };

  return (
    <SafeView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/HawaiPizzaLogo.jpg")}
        />
      </View>
      <View style={styles.formik}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationShcema}
          onSubmit={handleSubmit}
        >
          {() => (
            <>
              <ErrorMessage
                error="Invalid email or/and password"
                visible={loginFaild}
              />
              <TextInputField
                icon="email"
                name="email"
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
              <TextInputField
                icon="lock"
                name="password"
                placeholder="Password"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
              />

              {isLoading ? (
                <ActivityIndicator animating={true} color={colors.danger} />
              ) : (
                <Submit title="Login" />
              )}
            </>
          )}
        </Formik>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.5,
    top: 50,
    alignItems: "center",
  },
  formik: {
    flex: 0.5,
    padding: 15,
  },
  image: { height: 200, width: 200, borderRadius: 100 },
});
