import 'dart:convert';
import 'package:offline_cook_book/objects/recipe.dart';
import 'package:offline_cook_book/objects/tag.dart';

class Data {
  final List<Recipe> allRecipes = [];

  Future<List<Recipe>> extractRecipeData(allAssets) async {
    var markdown = json
        .decode(allAssets)
        .keys
        .where((String key) => key.startsWith('assets/recipes/markdown/'));

    for (var i in markdown) {
      var recipe = Recipe(i);
      allRecipes.add(recipe);
      recipe.start();
    }

    return allRecipes;
  }

  //Future<List<Tag>> extractTagsData() async {}
}
