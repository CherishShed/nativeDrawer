import "react-native-gesture-handler";
import "./global.css";
import Settings from "./components/Settings";
// import Dashboard from "./components/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import { Button } from "react-native";
import Main from "./components/Main";
import Second from "./components/Second";

export type LayoutInterface = {
  settings: undefined;
  dashboard: { screen: { main: undefined; second: undefined } };
};
export type DrawarInterface = { main: undefined; second: undefined };
const Tab = createBottomTabNavigator<LayoutInterface>();
export const Drawer = createDrawerNavigator<DrawarInterface>();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        title: "My settings",
        tabBarActiveBackgroundColor: "white",
        tabBarActiveTintColor: "blue",
        tabBarStyle: { backgroundColor: "pink" },
        tabBarInactiveTintColor: "skyblue",
      }}
    >
      <Tab.Screen component={Settings} name="settings" />
      <Tab.Screen
        component={DrawerNavigator}
        name="dashboard"
        options={{ title: "My dashboard", headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Main} name="main" />
      <Drawer.Screen component={Second} name="second" />
    </Drawer.Navigator>
  );
}
