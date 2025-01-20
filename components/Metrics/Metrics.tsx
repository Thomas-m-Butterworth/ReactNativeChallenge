import React from "react";
import { CardProps } from "../../store/data/types";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../utils/constants";
import { formatIndexLabel, getIndexColor } from "../../utils";

export const Metrics = ({ card }: { card: CardProps }) => (
  <View style={styles.metricsContainer} testID="MetricsContainer">
    <View style={styles.metricItem} testID="ForecastContainer">
      <Feather
        name="trending-up"
        size={30}
        color={COLORS.forecast}
        testID="ForecastIcon"
      />
      <Text style={styles.metricValue} testID="ForecastText">
        {card.intensity.forecast}
      </Text>
    </View>
    <View style={styles.metricItem} testID="ActualContainer">
      <Feather name="eye" size={30} color={COLORS.actual} testID="ActualIcon" />
      <Text style={styles.metricValue} testID="ActualText">
        {card.intensity.actual}
      </Text>
    </View>
    <View style={styles.metricItem} testID="IndexContainer">
      <Feather
        name="bar-chart-2"
        size={30}
        color={getIndexColor(card.intensity.index)}
        testID="IndexIcon"
      />
      <Text style={styles.metricValue} testID="IndexText">
        {formatIndexLabel(card.intensity.index)}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  metricsContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  metricItem: {
    alignItems: "center",
    flex: 1,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 8,
    color: "#333",
  },
});
