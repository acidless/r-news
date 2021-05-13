import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import globalStyles from "../../../../assets/styles";

/*====================*/

function NewsNotFound() {
  return (
    <View style={globalStyles.centered}>
      <AntDesign name="frowno" size={100} color="#f64c72" />
      <Text style={styles.notFoundText}>Новостей нет!</Text>
    </View>
  );
}

/*====================*/

const styles = StyleSheet.create({
  notFoundText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

/*====================*/

export default NewsNotFound;
