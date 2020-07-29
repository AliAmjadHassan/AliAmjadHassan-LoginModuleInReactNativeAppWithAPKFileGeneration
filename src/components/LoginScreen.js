import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { styles } from "../styles/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { getToken } from "../actions/actions";
import { AuthContext } from "../../App";

const LoginScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  const passwordInputChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const textInputChange = (val) => {
    setData({
      ...data,
      username: val,
    });
  };

  const loginHandler = (username, password) => {
    getToken(username, password).then((response) => signIn(response));
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <Text style={styles.headerText}>SKIP</Text>
        <Text style={styles.LeadText}>
          Let's get you sign in first, shall we?
        </Text>
        <Image
          style={{ marginLeft: 20 }}
          source={require("../asseerts/2020-07-25.png")}
        ></Image>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity style={styles.Facebook}>
            <Text style={styles.FacebookText}>FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Google}>
            <Text style={styles.GoogleText}>GOOGLE</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.dividerText}>
          ──────── OR CONNECT WITH EMAIL────────
        </Text>

        <Text style={styles.EmailText}>Email</Text>

        <View style={styles.action}>
          <EvilIcons size={60} name="user" style={{ marginLeft: 20 }} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
        </View>
        <Text style={styles.EmailText}>Password</Text>
        <View style={styles.action}>
          <EvilIcons size={60} name="lock" style={{ marginLeft: 20 }} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => passwordInputChange(val)}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Trouble <Text style={{ color: "#1555F1" }}>Signing in?</Text>
          </Text>
          <Text style={{ marginTop: 10, marginRight: 20 }}>
            Sign in using{" "}
            <Text
              style={{
                color: "#1555F1",
              }}
            >
              Phone
            </Text>{" "}
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity
            onPress={() => loginHandler(data.username, data.password)}
            style={styles.SignInButton}
          >
            <Text style={styles.SignInText}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.LastText}>
          Don't have an account yet?{" "}
          <Text style={{ color: "#1555F1" }}>Sign up</Text>
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;
