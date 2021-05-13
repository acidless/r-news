import {
  Button,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../../../assets/styles";
import { FontAwesome5 } from "@expo/vector-icons";

/*====================*/

interface PropTypes {
  onSubmit: (searchValue: string) => void;
}

/*====================*/

const Search: React.FC<PropTypes> = function ({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  /*====================*/

  function searchSubmit() {
    onSubmit(searchValue.trim());
    setSearchValue("");
  }

  return (
    <View style={{ ...styles.searchWrapper, ...globalStyles.bordered }}>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.searchInput}
      />
      <TouchableOpacity onPress={searchSubmit}>
        <FontAwesome5 name="search" size={24} color="#f64c72" />
      </TouchableOpacity>
    </View>
  );
};

/*====================*/

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
});

/*====================*/

export default Search;
