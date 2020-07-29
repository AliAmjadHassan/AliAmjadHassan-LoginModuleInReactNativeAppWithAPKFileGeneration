import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { AuthContext } from "../../../App";

const HomeScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
    <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
    
}}>
    <Text style={{
      fontSize:40,
      color:'#009387'
    }}>
        Hello World!!!
    </Text>
</View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={() => signOut()}
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "#3B5998",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
