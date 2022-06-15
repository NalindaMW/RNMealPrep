import { View, Text, StyleSheet } from "react-native";

function SimpleList({ data }) {
  return data.map((dataItem) => (
    <View key={dataItem} style={styles.listItem}>
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ));
}

export default SimpleList;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    textAlign: "center",
    color: "#351401",
  },
});
