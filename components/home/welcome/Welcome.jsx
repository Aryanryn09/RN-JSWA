import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
// import { useRouteNode } from "expo-router/build/Route";

const jobTypes = ["Full Time", "Part Time", "Contractor"];
const Welcome = () => {
  const router = useRouter();
  const [activeJobTypes, setActiveJobTypes] = useState("Full-Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Ryn 09 </Text>
        <Text style={styles.welcomeMessage}>Find jobs made for you </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What kinda jobs are you looking for"
          />
        </View>
        {/* <Text sty
        le={styles.welcomeMessage}>Find jobs made for you </Text> */}
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtn}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={(item) => {
            <TouchableOpacity
              onPress={() => {
                setActiveJobTypes(item);
                router.push(`/search/${item}`);
              }}
              style={styles.tab(activeJobTypes, item)}
            >
              <Text style={styles.tab(activeJobTypes, item)}>{item}</Text>
            </TouchableOpacity>;
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;
