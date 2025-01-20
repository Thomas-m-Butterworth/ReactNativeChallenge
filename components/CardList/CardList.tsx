import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDataStore } from "../../store/data/dataStore";
import { Card } from "../../components/Card/Card";
import { CardProps } from "../../store/data/types";

export const CardList = ({ data }: { data: CardProps[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.from}-${index}`}
        renderItem={({ item }) => <Card card={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        testID="CardList"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  listContent: {
    paddingBottom: 16,
  },
});
