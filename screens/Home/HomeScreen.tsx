import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDataStore } from "../../store/data/dataStore";
import { CardList } from "../../components";

export const HomeScreen = () => {
  const { data } = useDataStore();
  return (
    <SafeAreaView style={styles.page} testID="HomeScreen">
      <CardList data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
