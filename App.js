import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
} from "./src/view";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarLabel: "Search",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="search-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{
          headerShown: false,
          tabBarLabel: "Favorites",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="heart-outline" size={size} color={color} />;
          },
          tabBarBadge: "3",
        }}
      />

      <Tab.Screen
        name="Screen5"
        component={Screen5}
        options={{
          headerShown: false,
          tabBarLabel: "Inbox",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: ({ size, color }) => {
            return (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Screen6"
        component={Screen6}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
