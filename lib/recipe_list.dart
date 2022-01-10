import 'dart:convert';
import 'package:offline_cook_book/recipe.dart';

class Data {
  Future<List<Recipe>> extractRecipes(allAssets) async {
    List<Recipe> allRecipes = [];

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

    return allRecipes;
  }
}
