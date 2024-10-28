import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, PaperProvider } from "react-native-paper";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Screen2({ navigation }) {
  const [item, setItem] = useState([]); // Dữ liệu gốc từ API
  const [filteredItem, setFilteredItem] = useState([]); // Dữ liệu đã được lọc

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const res = await fetch(
        `https://671ef8fa1dfc429919838def.mockapi.io/listPhone`
      );
      const data = await res.json();
      setItem(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          height: 120,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "gray",
          marginVertical: 10,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: item.image }} // Ensure this uses a valid image URL
            style={{ width: "80%", height: "80%", resizeMode: "contain" }}
          />
        </View>

        <View style={{ flex: 5, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <AntDesign name="star" size={25} color="yellow" />
            <AntDesign
              name="star"
              size={25}
              color="yellow"
              style={{ paddingHorizontal: 6 }}
            />
            <AntDesign name="star" size={25} color="yellow" />
            <AntDesign
              name="star"
              size={25}
              color="yellow"
              style={{ paddingHorizontal: 6 }}
            />
            <AntDesign name="staro" size={25} color="black" />
          </View>
        </View>

        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <PaperProvider>
      <Appbar.Header elevated={true} style={{ backgroundColor: "white" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={"Electronics"} />
        <Appbar.Action icon="cart" size={30} />
        <View style={{ paddingRight: 10 }}>
          <Image
            source={require("../img/avatar.png")}
            style={{ width: 45, height: 45, resizeMode: "contain" }}
          />
        </View>
      </Appbar.Header>

      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* search  */}
        <View style={{ flex: 1.3, flexDirection: "row" }}>
          <View
            style={{
              flex: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: "70%",
                borderRadius: 10,
                backgroundColor: "#d0d0d0",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="search-outline" color="black" size={28} />
              </View>
              <View style={{ flex: 8 }}>
                <TextInput
                  placeholder="Search"
                  style={{ width: "100%", height: "100%", fontSize: 17 }}
                />
              </View>
            </View>
          </View>

          <View
            style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                width: "80%",
                height: "70%",
                backgroundColor: "#d0d0d0",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Ionicons name="list-outline" color="black" size={28} />
            </View>
          </View>
        </View>

        {/* category */}
        <View
          style={{
            flex: 3.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%", height: "100%" }}>
            <View
              style={{
                flex: 3.5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Categories
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 16, color: "gray" }}>See all</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 6.5, flexDirection: "row" }}>
              {/* Filter by Phone */}
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  const filtered = item.filter(
                    (item) => item.category === "phone"
                  );
                  setFilteredItem(filtered);
                }}
              >
                <View
                  style={{
                    width: "90%",
                    height: "85%",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#d9cbf6",
                  }}
                >
                  <Image
                    source={require("../img/phone.png")}
                    style={{
                      width: "88%",
                      height: "88%",
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </TouchableOpacity>

              {/* Filter by iPad */}
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  const filtered = item.filter(
                    (item) => item.category === "tablet"
                  );
                  setFilteredItem(filtered);
                }}
              >
                <View
                  style={{
                    width: "90%",
                    height: "85%",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f9c2e2",
                  }}
                >
                  <Image
                    source={require("../img/ipad.png")}
                    style={{
                      width: "88%",
                      height: "88%",
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </TouchableOpacity>

              {/* Filter by Laptop */}
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  const filtered = item.filter(
                    (item) => item.category === "laptop"
                  );
                  setFilteredItem(filtered);
                }}
              >
                <View
                  style={{
                    width: "90%",
                    height: "85%",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#c1e4f9",
                  }}
                >
                  <Image
                    source={require("../img/laptop.png")}
                    style={{
                      width: "88%",
                      height: "88%",
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* FlatList */}
        <View style={{ flex: 7 }}>
          <FlatList
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            data={filteredItem.length > 0 ? filteredItem : item} // Hiển thị danh sách đã được lọc
          />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
