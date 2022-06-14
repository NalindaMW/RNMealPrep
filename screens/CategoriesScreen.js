import { Text, StyleSheet, FlatList, SafeAreaView, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function pressHandler(itemData) {
    navigation.navigate("MealsOverview", {
      categoryID: itemData.item.id,
    });
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => pressHandler(itemData)}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
