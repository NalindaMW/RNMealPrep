import { StyleSheet, View, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  //   can use useRoute in this screen or in nested components that has no access to route
  //   const route = useRoute();
  //   const catID = route.params.categoryID;

  const catID = route.params.categoryID;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  // useLayoutEffect is used to run this effect simultaniously with component function execution
  // when using useEffect there is an delay updating the title, bcs it executes after the compoent function execution
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
      headerBackTitle: " ",
    });
  }, [catID, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
