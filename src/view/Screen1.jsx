import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Screen1 = ({ navigation }) => {
  const [login, setLogin] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    try {
      const res = await fetch(
        `https://671ef8fa1dfc429919838def.mockapi.io/login`
      );
      const data = await res.json();
      setLogin(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogin = () => {
    const user = login.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigation.navigate("TabNavigator");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flex: 1.2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../img/logo.png")}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 25, paddingVertical: 10 }}>
          Hello Again!
        </Text>
        <Text style={{ fontSize: 14, color: "gray" }}>
          Login into your account
        </Text>
      </View>

      <View
        style={{
          flex: 1.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* mail */}
        <View
          style={{
            width: "85%",
            height: 60,
            borderRadius: 10,
            borderColor: "gray",
            flexDirection: "row",
            borderWidth: 1,
          }}
        >
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="mail-outline" size={28} color="black" />
          </View>
          <View style={{ flex: 8 }}>
            <TextInput
              placeholder="Enter your email address"
              style={{
                width: "100%",
                height: "100%",
                color: "gray",
                fontSize: 18,
              }}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
        </View>

        {/* password  */}
        <View
          style={{
            width: "85%",
            height: 60,
            borderRadius: 10,
            borderColor: "gray",
            flexDirection: "row",
            borderWidth: 1,
            marginTop: 12,
          }}
        >
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="lock-closed-outline" size={28} color="black" />
          </View>
          <View style={{ flex: 6 }}>
            <TextInput
              placeholder="Enter your password"
              style={{
                width: "100%",
                height: "100%",
                color: "gray",
                fontSize: 18,
              }}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="eye-outline" size={28} color="black" />
          </View>
        </View>

        {/* forgot password */}
        <View
          style={{
            width: "80%",
            height: 30,
            justifyContent: "center",
            alignItems: "flex-end",
            marginVertical: 12,
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontWeight: 600, color: "#08bcd4", fontSize: 16 }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>

        {/* continue button */}
        <TouchableOpacity
          style={{
            width: "85%",
            height: 60,
            borderRadius: 10,
            backgroundColor: "#08bcd4",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleLogin}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "85%", height: "100%", flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 0,
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              ></View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "gray", fontSize: 20 }}>or</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 0,
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              ></View>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, alignItems: "center", paddingTop: 5 }}>
          <View
            style={{
              width: "60%",
              height: 65,
              flexDirection: "row",
            }}
          >
            {/* google */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "90%",
                  height: "100%",
                  borderRadius: 10,
                  borderColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 2,
                }}
              >
                <Ionicons name="logo-google" size={28} color="red" />
              </TouchableOpacity>
            </View>

            {/* facebook */}
            <View
              style={{
                flex: 1,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "90%",
                  height: "100%",
                  borderRadius: 10,
                  borderColor: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 2,
                }}
              >
                <Ionicons name="logo-facebook" size={28} color="blue" />
              </TouchableOpacity>
            </View>

            {/* apple */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "90%",
                  height: "100%",
                  borderRadius: 10,
                  borderColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 2,
                }}
              >
                <Ionicons name="logo-apple" size={28} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
