import 'package:flutter/material.dart';
import 'package:offline_cook_book/custom_widgets/recipe_list.dart';
import 'package:offline_cook_book/objects/recipe.dart';

class AllRecipesScreen extends StatelessWidget {
  const AllRecipesScreen(this.allRecipes, {Key? key}) : super(key: key);

  final List<Recipe> allRecipes;

  final double width = 400;

  @override
  Widget build(context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("All Recipes"),
        ),
        body: RecipeList(allRecipes: allRecipes));
  }
}
