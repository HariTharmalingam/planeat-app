import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const Button = ({
  title,
  bgColor,
  titleColor,
  onPress,
  width = "100%",
  containerStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={(args) => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor: bgColor,
              width,
            },
            containerStyle,
          ];
        }

        return [
          styles.base,
          {
            opacity: 1,
            backgroundColor: bgColor,
            width,
          },
          containerStyle,
        ];
      }}
    >
      <Text style={[styles.text, { color: titleColor }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    lineHeight: 22,
    fontSize: 18,
  },
  base: {
    backgroundColor: "#F3683F",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
  },
});

export default Button;
