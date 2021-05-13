import { Alert, Linking, TouchableWithoutFeedback, View } from "react-native";
import React, { useCallback } from "react";

/*====================*/

interface PropTypes {
  url: string;
}

/*====================*/

const Link: React.FC<PropTypes> = function ({ url, children }) {
  const handlePress = useCallback(async () => {
    const isSupported = await Linking.canOpenURL(url);

    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Что-то пошло не так!");
    }
  }, [url]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      {children}
    </TouchableWithoutFeedback>
  );
};

/*====================*/

export default Link;
