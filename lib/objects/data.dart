import 'dart:convert';
import 'package:offline_cook_book/objects/recipe.dart';

import 'tag.dart';

class Data {
  final List<Recipe> allRecipes = [];
  final List<Tag> allTags = [];

  Data(allAssets) {
    create(allAssets);
  }

  // Generate a list of recipes and tags
  create(allAssets) async {
    var markdown = json
        .decode(allAssets)
        .keys
        .where((String key) => key.startsWith('assets/recipes/markdown/'));
    for (var i in markdown) {
      var recipe = Recipe(i);
      allRecipes.add(recipe);
      await recipe.start();
    }

    for (var i in allRecipes) {
      var currentRecipeTags = i.getTags();
      for (var c in currentRecipeTags) {
        if (c.replaceAll(" ", "") != "") {
          var tagIndex = checkIfTagExists(c);
          if (tagIndex == -1) {
            var createTag = Tag(c);
            createTag.addRecipe(i);
            allTags.add(createTag);
          } else {
            allTags[tagIndex].addRecipe(i);
          }
        }
      }
    }

    allTags.sort((a, b) => a.getName().compareTo(b.getName()));
  }

  int checkIfTagExists(tagName) {
    for (var i = 0; i < allTags.length; i++) {
      if (allTags[i].getName() == tagName) {
        return i;
      }
    }
    return -1;
  }

  List<Recipe> getAllRecipes() {
    return allRecipes;
  }

  List<Tag> getAllTags() {
    return allTags;
  }
}
