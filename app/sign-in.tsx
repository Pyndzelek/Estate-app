import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { refetch, loading, isloggedIn } = useGlobalContext();

  if (!loading && isloggedIn) return <Redirect href="/" />;

  const handleLogIn = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Login failed", "Please try again.");
      console.log("Login failed");
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center text-black-200 font-rubik uppercase ">
            Welcome to ReState
          </Text>
          <Text className="text-3xl font-rubik-bold text-center text-black-300 mt-2">
            Let's get you closer to {"\n"}
            <Text className="text-primary-300">your dream home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Log in with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogIn}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full mt-5 py-4"
          >
            <View className="flex-row justify-center items-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
