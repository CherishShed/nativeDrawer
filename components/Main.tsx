import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DrawarInterface } from "../App";

export default function Main() {
  const navigation = useNavigation<NavigationProp<DrawarInterface>>();
  return (
    <View className="px-10 pt-5">
      <Text className="text-2xl text-pink-500">Main Screen</Text>
      <Button
        title="second"
        onPress={() => {
          //   dashboard;
          navigation.navigate("second");
        }}
      />
    </View>
  );
}
