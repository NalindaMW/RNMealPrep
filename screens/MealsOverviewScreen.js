import { StyleSheet, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  //   can use useRoute in this screen or in nested components that has no access to route
  //   const route = useRoute();
  //   const catID = route.params.categoryID;

  const catID = route.params.categoryID;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catID}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
