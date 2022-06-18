import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect, useContext } from "react";
import MealDetails from "../components/MealDetails";
import SimpleList from "../components/SimpleList";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsContext = useContext(FavoritesContext); // Context API

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids); // Redux
  const dispatch = useDispatch();

  const mealID = route.params.mealID;

  const selectedMeal = MEALS.find((meal) => mealID === meal.id);

  // const isFavoriteMeal = favoriteMealsContext.ids.includes(mealID); // Context API
  const isFavoriteMeal = favoriteMealIds.includes(mealID); // Redux

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavoriteMeal ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHander}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHander]);

  function changeFavoriteStatusHander() {
    if (isFavoriteMeal) {
      // favoriteMealsContext.removeFavorite(mealID); // Context API
      dispatch(removeFavorite({ id: mealID })); // Redux
    } else {
      // favoriteMealsContext.addFavorite(mealID); // Context API
      dispatch(addFavorite({ id: mealID })); // Redux
    }
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <Text style={styles.subtitle}>Ingredients</Text>
        <SimpleList data={selectedMeal.ingredients} />
        <Text style={styles.subtitle}>Steps</Text>
        <SimpleList data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
  },
});
