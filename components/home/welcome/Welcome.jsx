import React from "react";
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
const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Ryn 09 </Text>
        <Text style={styles.welcomeMessage}>Find jobs made for you </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
        {/* <Text style={styles.welcomeMessage}>Find jobs made for you </Text> */}
      </View>
    </View>
  );
};

export default Welcome;
