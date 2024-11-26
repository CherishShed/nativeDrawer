import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { DrawarInterface } from "../App";

export default function Second() {
  const navigation = useNavigation<NavigationProp<DrawarInterface>>();

  return (
    <View className="px-10 pt-5">
      <Text className="text-2xl text-pink-500">Second Screen</Text>
      <Button
        title="main"
        onPress={() => {
          //   dashboard;
          navigation.navigate("main");
        }}
      />
    </View>
  );
}
