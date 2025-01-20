import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatTime } from "../../utils";
import { COLORS } from "../../utils/constants";
import { CardProps } from "../../store/data/types";

export const Time = ({ card }: { card: CardProps }) => (
  <View style={styles.timeRange} testID="TimeRangeContainer">
    <Text style={styles.timeRangeTitle}>
      {formatTime(card.from)} - {formatTime(card.to)}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  timeRange: {
    marginBottom: 16,
    alignItems: "center",
  },
  timeRangeTitle: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: -0.35,
  },
});
