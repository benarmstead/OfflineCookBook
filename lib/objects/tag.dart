import 'package:offline_cook_book/objects/recipe.dart';

class Tag {
  String name = "";
  List<Recipe> recipes = [];

  Tag(this.name);

  void addRecipe(recipe) {
    if (!recipes.contains(recipe)) {
      recipes.add(recipe);
    }
  }

  String getName() {
    return name;
  }

  List<Recipe> getRecipes() {
    return recipes;
  }
}
