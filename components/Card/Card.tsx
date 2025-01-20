import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CardProps } from "../../store/data/types";
import { COLORS } from "../../utils/constants";
import { formatTime } from "../../utils";
import { Metrics } from "../Metrics";
import { Time } from "../Time";

export const Card = ({ card }: { card: CardProps }) => {
  return (
    <View style={styles.container} testID="CardContainer">
      <Time card={card} />
      <Metrics card={card} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    height: 150,
    borderRadius: 16,
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
  },
});
