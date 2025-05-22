import icons from "@/constants/icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-rubik-bold text-black-300 mt-5">
          Property ID: {id}
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex flex-row items-center justify-center bg-primary-200 rounded-full size-11"
        >
          <Image source={icons.backArrow} className="size-5" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Property;
