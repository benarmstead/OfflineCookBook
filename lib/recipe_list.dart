import 'dart:convert';
import 'package:offline_cook_book/recipe.dart';

class Data {
  List<Recipe> allRecipes = [];

  Data(allAssets) {
    extractRecipes(allAssets);
  }

  void extractRecipes(allAssets) async {
    var a = json
        .decode(allAssets)
        .keys
        .where((String key) => key.startsWith('assets/recipes/markdown/'));

    for (var i in a) {
      var recipe = Recipe(i);
      allRecipes.add(recipe);
      await recipe.readText();
      recipe.start();
    }
  }

  List<Recipe> getRecipes() {
    return allRecipes;
  }
}
