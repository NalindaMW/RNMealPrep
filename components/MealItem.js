import { View, Text, StyleSheet } from "react-native";

function MealItem({ title }) {
  return (
    <View style={styles.mealItem}>
      <Text>{title}</Text>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
  },
});
