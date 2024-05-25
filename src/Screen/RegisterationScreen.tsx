import React, { useContext, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, Image, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import { SafeView } from "../const/SafeView";
import { TextInputField } from "../component/TextInput";
import { AuthContext } from "../services/authentication/AuthenticationContext";
import ErrorMessage from "../component/ErrorMessage";
import "firebase/compat/auth";
import Submit from "../component/Submit";
import Button from "../component/Button";
import * as Yup from "yup";
interface SubmitProps {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  phoneNumber: string;
}
interface Props {
  navigation: any;
}

export default ({ navigation }: Props) => {
  const [loginFaild, setLoginFaild] = useState(false);
  const { onRegister, error, setUserInfo } = useContext(AuthContext);

  const validationShcema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    repeatPassword: Yup.string().required().min(6).label("Password"),
    phoneNumber: Yup.string()
      .min(10, "Number must Be at least 11")
      .max(11)
      .required(),
  });
  const handleSubmit = ({
    email,
    password,
    repeatPassword,
    name,
    phoneNumber,
  }: SubmitProps) => {
    onRegister(email, password, repeatPassword);
    const userInfo = { email, name, phoneNumber };
    setUserInfo(userInfo);
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
            repeatPassword: "",
            name: "",
            phoneNumber: "",
          }}
          validationSchema={validationShcema}
          onSubmit={handleSubmit}
        >
          {() => (
            <>
              <ScrollView>
                <TextInputField
                  icon="account"
                  name="name"
                  textContentType="name"
                  placeholder="FullName"
                  autoCorrect={false}
                  autoCapitalize="none"
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
                <TextInputField
                  icon="lock"
                  name="repeatPassword"
                  placeholder="Repeat Password"
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry
                />
                <TextInputField
                  icon="cellphone"
                  name="phoneNumber"
                  placeholder="PhoneNumber"
                  autoCorrect={false}
                  keyboardType="numeric"
                />
                <ErrorMessage error={error} visible={loginFaild} />
                <Submit title="Register" />
              </ScrollView>
            </>
          )}
        </Formik>
      </View>
      <Button
        style={styles.backButton}
        title="Back"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </SafeView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    padding: 5,
    position: "absolute",
    width: "40%",
    bottom: 10,
    left: "30%",
  },
  imageContainer: {
    flex: 0.3,

    alignItems: "center",
  },
  formik: {
    flex: 0.7,
    padding: 15,
  },
  image: { height: 200, width: 200, borderRadius: 100 },
});
