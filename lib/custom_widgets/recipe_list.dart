import 'package:flutter/material.dart';
import 'package:offline_cook_book/screens/recipe_screen.dart';
import 'package:offline_cook_book/objects/recipe.dart';

class RecipeList extends StatelessWidget {
  const RecipeList({
    Key? key,
    required this.allRecipes,
  }) : super(key: key);

  final List<Recipe> allRecipes;

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      primary: false,
      slivers: <Widget>[
        SliverPadding(
          padding: const EdgeInsets.all(5),
          sliver: SliverGrid.count(
            crossAxisSpacing: 10,
            mainAxisSpacing: 10,
            crossAxisCount: 3,
            children: <Widget>[
              for (var i = 0; i < allRecipes.length; i++)
                ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => RecipeScreen(allRecipes[i])),
                      );
                    },
                    child: Text(allRecipes[i].getTitle())),
            ],
          ),
        ),
      ],
    );
  }
}
