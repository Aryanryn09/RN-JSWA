import { useState } from "react";
import { View, Text, ScrollAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLOR, icons, images, fonts, COLORS, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
// import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  const router = useRouter();
  return (
    <ScrollAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => {
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
          headerRight: () => {
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />;
          },
          headerTitle: "",
        }}
      />
      <ScrollView showVerticalAreaScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Home />
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </ScrollAreaView>
  );
}
