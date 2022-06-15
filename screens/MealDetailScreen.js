import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import SimpleList from "../components/SimpleList";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealID = route.params.mealID;

  const selectedMeal = MEALS.find((meal) => mealID === meal.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHander}
          />
        );
      },
    });
  }, []);

  function headerButtonPressHander() {
    console.log("headerButtonPressHander");
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
